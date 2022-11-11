DCR=.devcontainer/run

dev:
	${DCR} up -d app
	make open

stop:
	${DCR} stop

install:
	${DCR} yarn install

open:
	open http://localhost:4000
	open http://localhost:6006

sh: bash
bash:
	${DCR} bash

cli:
	.devcontainer/run supereffective-cli