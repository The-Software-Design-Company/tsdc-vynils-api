docker_up() {
    docker-compose up --build
}

docker_dev_up() {
    	docker-compose -f docker-compose.dev.yml up --build
}

docker_down() {
    docker-compose down
}

docker_dev_down() {
    docker-compose -f docker-compose.dev.yml down
}