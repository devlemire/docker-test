#! /usr/bin/env sh
set -x

export NODE_ENV=production

cd ~/docker-test
git pull
echo pulled
cd ~/docker-test/public
npm run build
echo built
cd ~/docker-test
echo ready to start server