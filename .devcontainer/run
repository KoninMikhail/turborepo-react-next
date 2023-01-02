#!/usr/bin/env bash
set -e

if [[ "${1}" == "yarn" ]]; then
    docker-compose run --rm app yarn "${@:2}"
    exit 0
fi

if [[ "${1}" == "cli" ]]; then
    docker-compose run --rm app apps/cli/dist/index.mjs "${@:2}"
    exit 0
fi

docker-compose run --rm "${@}"
