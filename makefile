install:
	cd app && npm install

start:
	cd app && npm run start

build-app:
	cd app && rm -rf dist
	cd app && npm run build

build-snap:
	snapcraft build

build: build-app build-snap
