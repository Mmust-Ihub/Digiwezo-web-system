#! /bin/bash

# --- Example usage: ./deploy.sh <APP_NAME> <IMAGE_TAG> ----
set -eEuo pipefail

# ------ Configs ------
APP_NAME="$1"
IMAGE_TAG="$2"
CURRENT_PORT_FILE="/tmp/current_port" # Store the current port being used.
ROLLBACK_FILE="/tmp/rollback_info" # Stores the current state before rollout.

# ----- Colors ----
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# --- Helper functions --------
log() {
	echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
	echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

warn() {
	echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

# Determine current and new ports
if [[ -f "$CURRENT_PORT_FILE" ]]; then
	CURRENT_PORT=$(cat "$CURRENT_PORT_FILE")
	if [[ "$CURRENT_PORT" == "3000" ]]; then
		NEW_PORT="3001"
	else
		NEW_PORT="3000"
	fi
else
  CURRENT_PORT="3000"
  NEW_PORT="3001"
  echo "$CURRENT_PORT" > "$CURRENT_PORT_FILE"
fi

log "Current active port: $CURRENT_PORT"
log "New deployment port: $NEW_PORT"

# ----- Get and save the current state for rollback -----
if docker ps --format "table {{.Names}}\t{{.Image}}" | grep -q "${APP_NAME}-"; then
    CURRENT_CONTAINER=$(docker ps --format "{{.Names}}" | grep "${APP_NAME}-" | head -1) # This is the container that is running.
    CURRENT_IMAGE=$(docker ps --format "{{.Image}}" | grep "${APP_NAME}" | head -1)
    echo "CONTAINER=$CURRENT_CONTAINER" > $ROLLBACK_FILE
    echo "IMAGE=$CURRENT_IMAGE" >> $ROLLBACK_FILE
    echo "PORT=$CURRENT_PORT" >> $ROLLBACK_FILE
    log "Saved rollback info: $CURRENT_CONTAINER with image $CURRENT_IMAGE on port $CURRENT_PORT"
fi

# Pull the latest Image
log "Pulling new image: ${IMAGE_TAG}"
docker pull "$IMAGE_TAG"

# Stop and remove existing container running on new port (if any)
EXISTING_CONTAINER="${APP_NAME}-${NEW_PORT}"
if docker ps -a --format "{{.Names}}" | grep -q "^${EXISTING_CONTAINER}$"; then
    log "Stopping existing container: $EXISTING_CONTAINER"
    docker stop "$EXISTING_CONTAINER" || true
    docker rm "$EXISTING_CONTAINER "|| true
fi


# Start the new container
log "Starting new container on port $NEW_PORT"
docker run -d \
    --name "$EXISTING_CONTAINER" \
    --restart unless-stopped \
    -p $NEW_PORT:3000 \
    -e NODE_ENV=production \
    "$IMAGE_TAG"

# Wait for the container to be ready
log "Waiting for container to be ready..."
sleep 3

# Update current port file
echo $NEW_PORT > $CURRENT_PORT_FILE

log "Deployment completed successfully!"
log "New container running on port $NEW_PORT"