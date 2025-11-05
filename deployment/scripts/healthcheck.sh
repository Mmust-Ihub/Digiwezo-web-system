#! /bin/bash
set -eEuo pipefail
# ---- Example usage: ./healthcheck.sh <APP_NAME> <ENDPOINT> ----

# ------ Configs ------
APP_NAME="$1"
CURRENT_PORT_FILE="/tmp/current_port"
NGINX_CONF="/etc/nginx/conf.d/frontend.conf"
MAX_RETRIES=10
RETRY_INTERVAL=5
ENDPOINT=${2:-"/"}

# ----- Colors ----
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# --- Helper functions --------
log() {
	echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
	echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

# ---- Get the current Port ----
if [[ -f "$CURRENT_PORT_FILE" ]]; then
	CURRENT_PORT=$(cat "$CURRENT_PORT_FILE")
else
	error "No current port file found"
	exit 1
fi

log "Checking health on port $CURRENT_PORT"

# --- Check the health of the App ---
for i in $(seq 1 "$MAX_RETRIES"); do
	log "Health check attempt $i/$MAX_RETRIES"

	# Check if the latest container is running.
	CONTAINER_NAME="${APP_NAME}-${CURRENT_PORT}"
	if ! docker ps --format "{{.Names}}" | grep -q "^${CONTAINER_NAME}$"; then
		error "Container $CONTAINER_NAME is not running. Exiting ..."
		exit 1
	fi
	# Check HTTP endpoint.
	HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:"${CURRENT_PORT}""${ENDPOINT}" || echo "000")

	if [[ "$HTTP_STATUS" == "200" ]]; then
		log "Health check passed! HTTP $HTTP_STATUS"

		# Update nginx to point to the new port
		log "Updating nginx configuration to port $CURRENT_PORT"
		sudo sed -i "s/proxy_pass http:\/\/localhost:[0-9]*/proxy_pass http:\/\/localhost:$CURRENT_PORT/" $NGINX_CONF
		sudo nginx -t && sudo systemctl reload nginx

		# Clean up old containers
		OLD_PORT=$([[ $CURRENT_PORT == "3000" ]] && echo "3001" || echo "3000")
		OLD_CONTAINER="${APP_NAME}-${OLD_PORT}"

		if docker ps --format "{{.Names}}" | grep -q "^${OLD_CONTAINER}$"; then
			log "Stopping old container: $OLD_CONTAINER"
			docker stop "$OLD_CONTAINER" || true
			sleep 3
			docker rm "$OLD_CONTAINER" || true
		fi

		log "Deployment completed successfully."
		exit 0
	fi

	log "Health check failed (HTTP $HTTP_STATUS), retrying in ${RETRY_INTERVAL}s..."
	sleep $RETRY_INTERVAL
done

error "Health check failed after $MAX_RETRIES attempts"
exit 1
