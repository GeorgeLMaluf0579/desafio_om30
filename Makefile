#BUILD
docker-build:
	  docker-compose build

docker-build-no-cache:
	  docker-compose build --no-cache

#SETUPDB
docker-setupdb:
	  docker-compose run --rm back bundle exec rake db:drop db:create db:migrate
		docker-compose run --rm back bundle exec rake db:seed
		docker-compose run --rm back bundle exec rake db:drop db:create db:migrate RAILS_ENV=test

#RUN
docker-run:
	  docker-compose up

#STOP
docker-down:
		docker-compose down

#TESTS
docker-back-tests:
	  docker-compose run --rm back bundle exec rspec