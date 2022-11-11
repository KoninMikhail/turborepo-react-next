DCR=.devcontainer/run

default: dev
dev:
	${DCR} up -d app
	make open

stop:
	${DCR} stop

install:
	${DCR} app yarn install

open:
	open http://localhost:4000
	open http://localhost:6006

sh: bash
bash:
	${DCR} app bash
