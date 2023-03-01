DC=docker-compose

default: dev
dev:
	${DC} up -d
	sleep 2
	make open

stop:
	${DC} stop

install:
	${DC} run --rm app yarn install
	${DC} run --rm app yarn husky:install

open:
	open http://localhost:3000
	open http://localhost:6006

sh: bash
bash:
	${DC} run --rm app bash

build:
	${DC} run --rm app yarn build

test:
	${DC} run --rm app yarn test

lint:
	${DC} run --rm app yarn lint

pretty: format
prettify: format
format:
	${DC} run --rm app yarn format
