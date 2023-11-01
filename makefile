docker-up:
	docker-compose up --build

docker-dev-up:
	docker-compose -f docker-compose.dev.yml up --build

docker-down:
	docker-compose down

docker-dev-down:
	docker-compose -f docker-compose.dev.yml down

docker-buildx:
	docker buildx build --platform linux/amd64 -t tsdc-vynils-api:1.0.0 .

heroku-deploy:
	heroku container:push web --app tsdc-vynils-staging-api
	heroku container:release web --app tsdc-vynils-staging-api