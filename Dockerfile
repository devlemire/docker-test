FROM mhart/alpine-node

MAINTAINER DevMountain
 
WORKDIR /var/app

COPY . .
 
RUN yarn

EXPOSE 3000
 
CMD ["node", "index.js"]