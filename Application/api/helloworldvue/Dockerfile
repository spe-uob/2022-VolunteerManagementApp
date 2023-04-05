# pull official base image
FROM node:14
# set work directory
WORKDIR /usr/src/app
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
# install project dependencies
RUN npm install
# copy project
COPY . .
EXPOSE 8080
# run app
CMD ["npm", "run", "serve"]
