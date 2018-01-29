#!/bin/sh
set -x

cd ~/docker-test
git pull
echo pulled
cd ~/docker-test
forever start -l test.log -a --uid test index.js
echo server started