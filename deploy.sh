#!/bin/sh
set -x

cd ~/docker-test
git pull
cd ~/docker-test/public
yarn
yarn build
cd ~/docker-test
docker build -t test .
docker stop test_container
docker rm test_container
docker run -d -p 3000:3000 --name="test_container" -i test
docker container prune -f
docker image prune -f 