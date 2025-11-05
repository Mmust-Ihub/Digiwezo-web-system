#!/bin/bash

set -eEuo pipefail

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Default values
DOMAIN=""
USERNAME=""
SSL_MODE="full-strict"
INSTALL_DOCKER="true"
INSTALL_NGINX="true"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
	case $1 in
	--username)
		USERNAME="$2"
		shift 2
		;;
	--domain)
		DOMAIN="$2"
		shift 2
		;;
	--ssl-mode)
		SSL_MODE="$2"
		shift 2
		;;
	--install-docker)
		INSTALL_DOCKER="$2"
		shift 2
		;;
	--install-nginx)
		INSTALL_NGINX="$2"
		shift 2
		;;
	*)
		echo "Unknown option: $1"
		exit 1
		;;
	esac
done

# Logging functions
log_info() {
	echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
	echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
	echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
	echo -e "${RED}[ERROR]${NC} $1"
}

# Validate required parameters
if [ -z "$DOMAIN" ]; then
	log_error "Domain is required. Use --domain flag"
	exit 1
fi

log_info "Starting server setup for domain: $DOMAIN"
log_info "SSL Mode: $SSL_MODE"

#############################################
# System Update and Basic Tools
#############################################
log_info "Updating system packages..."
apt update -y
apt upgrade -y

log_info "Installing essential tools..."
apt install -y \
	curl \
	wget \
	git \
	vim \
	ufw \
	fail2ban \
	unzip \
	software-properties-common \
	ca-certificates \
	apt-transport-https \
	ca-certificates \
	gnupg \
	lsb-release

log_success "System updated and essential tools installed"

#############################################
# Create the necessary directories
#############################################
mkdir -p /home/"$USERNAME"/frontend
mkdir -p /home/"$USERNAME"/backend

# change ownership
chown -R "$USERNAME":"$USERNAME" /home/"$USERNAME"/frontend
chown -R "$USERNAME":"$USERNAME" /home/"$USERNAME"/backend

#############################################
# Firewall Configuration
#############################################
log_info "Configuring UFW firewall..."

# Reset UFW to default
ufw --force reset

# Default policies
ufw default deny incoming
ufw default allow outgoing

# Allow SSH
ufw allow 22/tcp comment 'SSH'

# Allow HTTPS
ufw allow 443/tcp comment 'HTTPS'

# Enable UFW
ufw --force enable

log_success "Firewall configured"

#############################################
# Docker Installation
#############################################
if [ "$INSTALL_DOCKER" == "true" ]; then
	log_info "Installing Docker..."

	# Remove any conflicting packages
	for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do apt remove $pkg 2>/dev/null || true; done

	# Add Docker's official GPG key
	install -m 0755 -d /etc/apt/keyrings
	curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
	chmod a+r /etc/apt/keyrings/docker.asc

	# Add the repository to APT sources
	echo \
		"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
        $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" |
		tee /etc/apt/sources.list.d/docker.list >/dev/null

	# Install Docker
	apt update -y
	apt install -y docker-ce docker-ce-cli docker-compose-plugin

	# Start and enable Docker
	systemctl start docker
	systemctl enable docker

	# Add current user to docker group
	usermod -aG docker "$USERNAME"
	log_info "Added $USERNAME to docker group."

	log_success "Docker installed successfully"
else
	log_info "Skipping Docker installation"
fi

#############################################
# Nginx Installation and Configuration
#############################################
if [ "$INSTALL_NGINX" == "true" ]; then
	log_info "Installing Nginx..."

	apt install -y nginx

	# Start and enable Nginx
	systemctl start nginx
	systemctl enable nginx

	log_success "Nginx installed successfully"
	nginx -v

	# Create necessary directories
	log_info "Creating Nginx directories..."
	mkdir -p /var/www/$DOMAIN

	# Remove the default config files
	rm /etc/nginx/conf.d/* || true

	# Create SSL directory if using full-strict mode
	if [ "$SSL_MODE" == "full-strict" ]; then
		log_info "Creating SSL certificates directory..."
		mkdir -p /etc/ssl/cloudflare
		chmod 755 /etc/ssl/cloudflare
	fi

	log_success "Nginx directories created"
else
	log_info "Skipping Nginx installation"
fi

#############################################
# Create App Directory Structure
#############################################
log_info "Creating application directories..."

mkdir -p /var/www/$DOMAIN
mkdir -p /var/log/$DOMAIN
mkdir -p /opt/app

# Set permissions
chmod 755 /var/www/$DOMAIN
chmod 755 /var/log/$DOMAIN

log_success "Application directories created"

#############################################
# Fail2Ban Configuration
#############################################
log_info "Configuring Fail2Ban..."

systemctl start fail2ban
systemctl enable fail2ban

# Create custom jail for nginx
cat >/etc/fail2ban/jail.local <<EOF
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5

[sshd]
enabled = true
port = 22
logpath = /var/log/auth.log

[nginx-http-auth]
enabled = true
port = https
logpath = /var/log/nginx/error.log

[nginx-noscript]
enabled = true
port = https
logpath = /var/log/nginx/access.log

[nginx-badbots]
enabled = true
port = https
logpath = /var/log/nginx/access.log
maxretry = 2
EOF

systemctl restart fail2ban

log_success "Fail2Ban configured"

#############################################
# System Optimization
#############################################
log_info "Optimizing system settings..."

# Optimize sysctl
cat >>/etc/sysctl.conf <<EOF
# Network optimization
net.core.somaxconn = 65536
net.ipv4.tcp_max_syn_backlog = 8192
net.ipv4.ip_local_port_range = 1024 65535
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 30

# Memory optimization
vm.swappiness = 10
vm.dirty_ratio = 60
vm.dirty_background_ratio = 2
EOF

sysctl -p

log_success "System optimized"

#############################################
# Setup Automatic Security Updates
#############################################
log_info "Configuring automatic security updates..."

apt install -y unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades

log_success "Automatic security updates configured"

#############################################
# Create development page
#############################################
log_info "Creating development page..."

mkdir -p /var/www/development
cat <<-'EOF' | tee /var/www/development/index.html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Development in Progress</title>
	    <style>
	        body {
	            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	            display: flex;
	            justify-content: center;
	            align-items: center;
	            height: 100vh;
	            margin: 0;
	            background: linear-gradient(135deg, #FF6F61 0%, #DE4444 100%); /* Red/Orange theme for development */
	            color: white;
	        }
	        .container {
	            text-align: center;
	            padding: 2rem;
	        }
	        h1 { font-size: 3rem; margin-bottom: 1rem; }
	        p { font-size: 1.2rem; opacity: 0.9; }
	        .spinner {
	            border: 4px solid rgba(255, 255, 255, 0.3);
	            border-top: 4px solid white;
	            border-radius: 50%;
	            width: 40px;
	            height: 40px;
	            animation: spin 1s linear infinite;
	            margin: 1rem auto;
	        }
	        @keyframes spin {
	            0% { transform: rotate(0deg); }
	            100% { transform: rotate(360deg); }
	        }
	    </style>
	</head>
	<body>
	    <div class="container">
	        <h1>🛠️ Development Underway</h1>
	        <div class="spinner"></div>
	        <p>This site is temporarily dedicated to development. The live version will be restored shortly.</p>
	        <p>If you expected to see the site, please check back in a few minutes.</p>
	    </div>
	</body>
	</html>
EOF

log_success "Development page created"

#############################################
# Create maintenance page
#############################################
log_info "Creating maintenance page..."

mkdir -p /var/www/maintenance
cat <<-'EOF' | tee /var/www/maintenance/index.html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Maintenance Mode</title>
	    <style>
	        body {
	            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	            display: flex;
	            justify-content: center;
	            align-items: center;
	            height: 100vh;
	            margin: 0;
	            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	            color: white;
	        }
	        .container {
	            text-align: center;
	            padding: 2rem;
	        }
	        h1 { font-size: 3rem; margin-bottom: 1rem; }
	        p { font-size: 1.2rem; opacity: 0.9; }
	    </style>
	</head>
	<body>
	    <div class="container">
	        <h1>🚧 Maintenance Mode</h1>
	        <p>We'll be back shortly. Thank you for your patience!</p>
	    </div>
	</body>
	</html>
EOF

log_success "Maintenance page created"

#############################################
# Setup Logrotate
#############################################
log_info "Configuring log rotation..."

cat <<-EOF | tee /etc/logrotate.d/"$DOMAIN"
	/var/log/$DOMAIN/*.log {
	    daily
	    missingok
	    rotate 14
	    compress
	    delaycompress
	    notifempty
	    create 0640 www-data adm
	    sharedscripts
	    postrotate
	        [ -f /var/run/nginx.pid ] && kill -USR1 \`cat /var/run/nginx.pid\`
	    endscript
	}
EOF

log_success "Log rotation configured"

#############################################
# Final Summary
#############################################
echo ""
echo "=========================================="
log_success "Server Setup Complete!"
echo "=========================================="
echo ""
log_info "Summary:"
echo "  Domain: $DOMAIN"
echo "  SSL Mode: $SSL_MODE"
echo "  Docker Installed: $INSTALL_DOCKER"
echo "  Nginx Installed: $INSTALL_NGINX"
echo ""
