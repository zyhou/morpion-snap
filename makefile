install:
	npm install

start:
	npm run start

build-app:
	rm -rf dist
	npm run build

build: build-app
