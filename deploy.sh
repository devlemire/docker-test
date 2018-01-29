#!/bin/sh
set -x

cd ~/docker-test
git pull
echo pulled
cd ~/docker-test
docker build -t test .
docker image prune -f
docker stop test_container
docker rm test_container
docker run -d -p 3000:3000 --name="test_container" -i test