DCR=.devcontainer/run

default: dev
dev:
	${DCR} up -d app
	sleep 1
	make open

stop:
	${DCR} stop

install:
	${DCR} app yarn install

open:
	open http://localhost:3000
	open http://localhost:6006

sh: bash
bash:
	${DCR} app bash

test:
	${DCR} app yarn test

build:
	${DCR} app yarn build

lint:
	${DCR} app yarn lint

pretty: format
prettify: format
format:
	${DCR} app yarn format

ci:
	${DCR} app yarn ci
