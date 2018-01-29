FROM mhart/alpine-node

MAINTAINER DevMountain
 
WORKDIR /var/app

COPY package.json /var/app

COPY yarn.lock /var/app
 
RUN yarn

COPY . /var/app

EXPOSE 3000
 
CMD ["node index.js"]