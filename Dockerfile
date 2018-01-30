FROM mhart/alpine-node

MAINTAINER DevMountain
 
WORKDIR /var/app

COPY . /var/app
 
RUN yarn

EXPOSE 3000
 
CMD ["node", "index.js"]