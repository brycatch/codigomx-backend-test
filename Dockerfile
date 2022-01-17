FROM node:14-alpine
# RUN apk --no-cache add --virtual builds-deps build-base python

WORKDIR /app

COPY ./src /app/src
COPY ./babel.config.js /app/src/babel.config.js
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./tsconfig.json /app/tsconfig.json

RUN npm install 
RUN npm run tsc:build

CMD npm run start
