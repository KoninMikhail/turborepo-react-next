DC=docker-compose -f .devcontainer/docker-compose.yml -p supereffective-assets

dev:
	${DC} up app -d
	make open

install:
	${DC} run --rm app yarn install

open:
	open http://localhost:4000
	open http://localhost:4001

sh: bash
bash:
	${DC} run --rm app bash