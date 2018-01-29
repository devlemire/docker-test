if [ "$TRAVIS_PULL_REQUEST" == false ]; then 
  ssh deploy@198.199.116.198 'bash -s' < ./deploy.sh
fi