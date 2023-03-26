# pull official base image
FROM node:lts-alpine

# set work directory
WORKDIR /app/api

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
RUN npm install npm@9.6.1

WORKDIR /app/api/helloworldvue
# copy both 'package.json' and 'package-lock.json' (if available)
COPY ./helloworldvue/package*.json ./
# install project dependencies
RUN npm install npm@9.6.1

COPY ./helloworldvue .

WORKDIR /app/api/helloworldvue
# run app
CMD ["npm", "run", "serve"]
