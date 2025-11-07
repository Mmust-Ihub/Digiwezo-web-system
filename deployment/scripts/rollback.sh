#! /bin/bash

# --- Example usage: ./rollback.sh <APP_NAME> <IMAGE_TAG> <NGINX_CONF_FILE>
set -eEuo pipefail

# ----- Configs -----
APP_NAME="$1"
IMAGE_TAG="$2"
ROLLBACK_FILE="/tmp/rollback_info"
CURRENT_PORT_FILE="/tmp/current_port"
NGINX_CONF="$3"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

log() {
	echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
	echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

log "Starting rollback process..."

# Check if the previous state exists.
if [[ ! -f $ROLLBACK_FILE ]]; then
	error "No rollback information found. Exiting ..."
	exit 1
fi

# Load the previous state info.
source "$ROLLBACK_FILE"
log "Rolling back to: $IMAGE on port $PORT"

# Get the current failed port.
if [[ -f "$CURRENT_PORT_FILE" ]]; then
	FAILED_PORT=$(cat "$CURRENT_PORT_FILE")
	FAILED_CONTAINER="${APP_NAME}-${FAILED_PORT}"

	# Stop and remove the failed container and it's image.
	if docker ps --format "{{.Names}}" | grep -q "^${FAILED_CONTAINER}$"; then
		log "Stopping failed container: $FAILED_CONTAINER"
		docker stop "$FAILED_CONTAINER" || true
		docker rm "$FAILED_CONTAINER" || true
		docker rmi "$IMAGE_TAG" || true
	fi
fi

# Check if rollback container exists/running
ROLLBACK_CONTAINER="${APP_NAME}-${PORT}"
if ! docker ps --format "{{.Names}}" | grep -q "^${ROLLBACK_CONTAINER}$"; then
	# Start rollback container if it doesn't exist
	log "Starting rollback container"
	docker run -d \
		--name "$ROLLBACK_CONTAINER" \
		--restart unless-stopped \
		-p "$PORT":3000 \
		-e NODE_ENV=production \
		"$IMAGE"

	sleep 5
fi

# Update current port
echo "$PORT" >"$CURRENT_PORT_FILE"

# Update nginx
log "Updating nginx to rollback configuration"
sudo sed -i "s/proxy_pass http:\/\/localhost:[0-9]*/proxy_pass http:\/\/localhost:$PORT/" $NGINX_CONF
sudo nginx -t && sudo systemctl reload nginx

# Verify rollback health
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$PORT/health || echo "000")
if [[ $HTTP_STATUS == "200" ]]; then
	log "Rollback completed successfully! Service is healthy on port $PORT"
	exit 0
else
	error "Rollback health check failed (HTTP $HTTP_STATUS)"
	exit 1
fi
