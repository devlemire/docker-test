FROM mhart/alpine-node

MAINTAINER DevMountain
 
WORKDIR /var/app

COPY . /var/app

EXPOSE 3000
 
CMD ["./initialize.sh"]