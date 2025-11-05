#! /bin/bash

# Get the project root.
PROJECT_ROOT=$(cd -P -- "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd -P)

# ---- Error handling & Traps ---
set -eEuo pipefail

get_docker_image_tag() {
	# Format: YYYYMMDD-HHMM (e.g., 20251103-1408) but in UTC
	date -u +'%Y%m%d-%H%M'
}

# This function returns both the build args and the specified  Dockerfile path ie '{"file": "path", "args": "args"}'
image_build_args() {
	local DOCKER_FILE=$1
	local DOCKER_FILE_PATH
    local BUILD_ARGS=""

	DOCKER_FILE_PATH=$(find "$PROJECT_ROOT" -type f -name "$DOCKER_FILE")
	if [[ -z "$DOCKER_FILE_PATH" ]]; then
		echo "Failed to get Dockerfile: $DOCKER_FILE"
		exit 1
	fi

	while IFS= read -r arg; do
		if [[ -n "${!arg:-}" ]]; then
			BUILD_ARGS="$BUILD_ARGS --build-arg $arg=${!arg}"
		fi
	done < <(grep -oP '(?<=^ARG )[A-Za-z_][A-Za-z0-9_]*' "$DOCKER_FILE_PATH")
	echo '{"path": "'"$DOCKER_FILE_PATH"'", "args": "'"${BUILD_ARGS}"'"}'
}

# --- Usage Information ----------
usage() {
	echo ""
	echo "Usage: $0 <command>"
	echo ""
	echo "Commands:"
	echo " -t || --tag: Generate an Image tag using the current time."
	echo " -a || --args: Get all the build arguments with corresponding values."
	echo ""
	echo "Examples:"
	echo "  $0 -t"
	echo "  $0 -a Dockerfile"
}

main() {
	# show usage and exit if no argument is passed.
	if [[ $# -eq 0 ]]; then
		usage
		exit 1
	fi

	command="${1,,}"
	case "$command" in
	"-t" | "--tag")
		get_docker_image_tag
		;;
	"-a" | "--args")
		image_build_args "$2"
		;;
	"help" | "-h" | "--help")
		usage
		;;
	*)
		echo "Error: '$1' is not a valid command"
		usage
		exit 1
		;;
	esac
}

# Execute the main function only when called directly.
if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
	main "$@"
else
	echo "Error: The main function cannot be sourced"
	exit 1
fi