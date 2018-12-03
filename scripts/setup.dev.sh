#!/bin/bash 

docker-compose up -d
docker-compose exec postgres createdb senditandelavfn -U postgres -e