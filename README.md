# Volunteer Management App

We're working on a website that can be used by different communities to help self organise, keep track of need and effectively deploy help. We focus on building an intuitive front-end design and a system which all users can interact with.

The application uses a Django project integrated with a vue application.

## UX design
To design an interactive user interface we employed general UX design methods, such as Journey Mapping, listing user personas and requirements. We aim to follow a UX design pattern.

![My Image](images/image1.jpg)

![My Image](images/image2.jpg)

![My Image](images/image3.jpg)

![My Image](images/image4.jpg)

## Deployment

To get running locally and quickly, download docker, clone this repository, then start the applications using this command in the api directory:

    docker-compose up --build

Then run the following command in the home directory

    docker-compose -f docker-compose.yml -f development.yml up --build

Direct to the helloworldvue directory and run the following commands

    npm i

    npm run serve

This downloads all required node modules for the vue app.

Restart the tofro-django container and get running!!

## Getting Running!

To get the website running open the following url:

    http://localhost:8000/

Login then direct to:

    http://localhost:8000/index

This is where the Vue Application is rendered. Now all that is left is to enjoy!!!

## Possible Issues
If you have a windows machine and you are having issues with setup.sh then run the following commands in your terminal:

    dos2unix setup.sh

    dos2unix run.sh

    dos2unix run-dev.sh

Ensure you execute all commands in the specified order