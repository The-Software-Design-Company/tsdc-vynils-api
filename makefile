docker-up:
	docker-compose up --build

docker-dev-up:
	docker-compose -f docker-compose.dev.yml up --build

docker-down:
	docker-compose down

docker-dev-down:
	docker-compose -f docker-compose.dev.yml down