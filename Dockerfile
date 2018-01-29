FROM beevelop/nodejs-python 

MAINTAINER DevMountain
 
WORKDIR /var/app

COPY package.json /var/app

COPY package-lock.json /var/app
 
RUN npm install

COPY . /var/app

EXPOSE 3000
 
CMD ["./initialize.sh"]