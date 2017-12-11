FROM node:6.9.1
EXPOSE 3000

WORKDIR /app

ADD package.json /app/

ADD . /app