FROM beevelop/nodejs-python 

MAINTAINER DevMountain
 
WORKDIR /var/app

COPY package.json /var/app

COPY yarn.lock /var/app
 
RUN yarn

COPY . /var/app

EXPOSE 3000
 
CMD ["./initialize.sh"]