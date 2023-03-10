# 1. Volunteer Management App

![Frontend Tests](https://github.com/spe-uob/2022-VolunteerManagementApp/actions/workflows/Frontend_Test.yml/badge.svg)

## Table of Contents
- <a href="#1">Overview</a>
- <a href="#a">Gannt Chart</a>
- <a href="#2">Deployment Instruction</a>
  - <a href="#3">Backend</a>
  - <a href="#4">Frontend</a>
- <a href="#5">Getting running</a>
- <a href="#6">Possible Issues</a>
- <a href="#7">UX design</a>
  - <a href="#8">Requirements</a>
  - <a href="#9">User Stories</a>
  - <a href="#10">use cases</a>
  - <a href="#11">journey mapping</a>
- <a href="#12"> Ethics </a>


<h2 id="1">Overview</h2>

We're working on a website that can be used by different communities to help self organise, keep track of need and effectively deploy help. We focus on building an intuitive front-end design and a system which all users can interact with.

The application uses a Django project integrated with a vue application.

<h2 id = "a">1.1 Gantt Chart</h2>
[Gantt Chart](Software Engineering Project Gantt chart.xlsx)

<h2 id="2">1.2 Deployment Instruction</h2>

<h3 id="3">1.2.1 Backend: (Using Docker) </h3> 

#### Install Docker: https://www.docker.com

To get running locally and quickly, download docker, clone this repository, then start the applications using this command in the api directory:

    docker-compose up --build

Then run the following command in the home directory：
```
docker-compose -f docker-compose.yml -f development.yml up --build
```

This downloads all required node modules for the vue app.

Restart the tofro-django container and get running!!

<h3 id="4"> 1.2.3 Frontend: </h3> 

Direct to the helloworldvue directory and run the following commands
```
npm install
npm run serve
```

<h2 id="5"> 1.3 Getting Running! </h2> 

To get the website running open the following url:
    http://localhost:8000/

Login then direct to:
    http://localhost:8000/index

This is where the Vue Application is rendered. Now all that is left is to enjoy!!!

<h2 id="6"> 1.4 Possible Issues </h2>
If you have a windows machine and you are having issues with setup.sh then run the following commands in your terminal:

```
dos2unix setup.sh
dos2unix run.sh
dos2unix run-dev.sh
```
Ensure you execute all commands in the specified order

<h2 id="7"> 1.5 UX design </h2> 
To design an interactive user interface we employed general UX design methods, such as Journey Mapping, listing user personas and requirements. We aim to follow a UX design pattern.


<a id="8">
  <img src="images/image2.png">
</a>

<a id="9">
   <img src="images/image9.png" >
</a>

<a id="10">
  <img src="images/image4.png">
</a>

<h2 id="12">1.6 Ethics</h2> 
In our group, we are committed to upholding ethical standards in everything we do.  However, there are certain things that cannot be avoided.  For example, if coordinators use this application, we need to know their email addresses, addresses, phone numbers, and personal information.  To avoid concerns about privacy and security, obtaining ethical approval is crucial.

To provide a good user experience, we have established the following ethical principles:
- We will prioritize the safety of our users.
- We will respect the privacy of our users and will never use their data for any purpose other than the intended one.
- We will listen to feedback and criticism from our users and will use it to improve our products and services.

By adhering to these principles, we hope to create a culture of respect that benefits everyone in our group.
