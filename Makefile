DCR=.devcontainer/run

dev:
	${DCR} up
	make open

install:
	${DCR} yarn install

open:
	open http://localhost:4000

sh: bash
bash:
	${DCR} bash
