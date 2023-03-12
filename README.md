# 1. Volunteer Management App

![Frontend Tests](https://github.com/spe-uob/2022-VolunteerManagementApp/actions/workflows/Frontend_Test.yml/badge.svg)
[![Contributors](https://img.shields.io/badge/Contributors-5-brightgreen)](https://github.com/spe-uob/2022-VolunteerManagementApp/graphs/contributors)
[![License: GPL](https://img.shields.io/badge/License-GPL-brightgreen.svg)](https://github.com/spe-uob/2022-VolunteerManagementApp/blob/Liu/Application/LICENSE)
[![Docker](https://img.shields.io/badge/Docker-v20.10.23-blue)](https://www.docker.com)
[![Vue version](https://img.shields.io/badge/Vue-v5.0.8-blue)](https://vuejs.org)
[![Django Version](https://img.shields.io/badge/Django-v4.0.2-blue)](https://www.djangoproject.com)

## Table of Contents
- <a href="#1">Overview</a>
- <a href="#a">Gannt Chart</a>
- <a href="#2">Deployment Instruction</a>
  - <a href="#3">Backend</a>
  - <a href="#4">Frontend</a>
- <a href="#5">Getting running</a>
- <a href="#6">Possible Issues & Bugs</a>
- <a href="#api"> API Guide </a>
- <a href="#7">UX design</a>
  - <a href="#8">Requirements</a>
  - <a href="#9">User Stories</a>
  - <a href="#10">use cases</a>
  - <a href="#10">journey mapping</a>
- <a href="#12"> Ethics </a>


<h2 id="1">Overview</h2>

We're working on a website that can be used by different communities to help self organise, keep track of need and effectively deploy help. We focus on building an intuitive front-end design and a system which all users can interact with.

The application uses a Django project integrated with a vue application.

<h2 id = "a">1.1 Gantt Chart</h2>
<a href="https://docs.google.com/spreadsheets/d/17jk70c7Ysqay2RxTJ-WYFc619bPg-nvXDeJa_21MRxU/edit#gid=1962477973">Gantt Chart</a>

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

<h2 id="6"> 1.4 Possible Issues & Bugs </h2>
If you have a windows machine and you are having issues with setup.sh then run the following commands in your terminal:

```
dos2unix setup.sh
dos2unix run.sh
dos2unix run-dev.sh
```
Ensure you execute all commands in the specified order

### 1.4.1 Found a bug !!!
If you found a bug, you can [create an issue](https://github.com/spe-uob/2022-VolunteerManagementApp/issues/new) with the tag `bug`


<h2 id="api"> 1.5 API Guide </h2> 

| <div align="left" style="width:180px">API URL</div>         | Request Type          | <div align="left" style="width:460px">Description</div>   |
| ------------- |:-------------:| :-----|
| `api/actions/` 	| `GET`     	| retreive all the action data from a server |
| `api/actions/` 	| `POST`     	| Add actions to the database - Requires an object with `Help Type`, `Resident`, `Due`, `Status`, `Date`|
| `api/volunteers/`  | `GET`    | retreive all the volunteers data from a server |
| `api/referrals/` 	| `GET`     	| retreive all the referral data from a server |
| `api/residents/`  | `GET`     	| retreive all the resident data from a server |
| `api/residents/`  | `POST`     	| Add residents to the database - Requires an object with `first_name`, `last_name`, `address`, `postcode`, `Date`|
| `api/volunteers/`  | `GET`    | retreive all the volunteers data from a server  |
| `api/organisations/`  | `GET`     	| retreive all the organistion data from a server|
| `api/residents/37/` | `DELETE` | Deletes a resident from the database |
| `api/actions/7/` | `PATCH` | a set of changes described in the request entity be applied to the resource identified by the Request- URI|

<h2 id="7"> 1.6 UX design </h2> 
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

<h2 id="12">1.7 Ethics</h2> 
In our group, we are committed to upholding ethical standards in everything we do. However, there are certain things that cannot be avoided. For example, if coordinators use this application, we need to know their email addresses, addresses, phone numbers, and personal information. To avoid concerns about privacy and security, obtaining ethical approval is crucial.
To provide a good user experience, we have established the following ethical principles:

We will prioritize the safety of our users.
We will respect the privacy of our users and will never use their data for any purpose other than the intended one.
We will listen to feedback and criticism from our users and will use it to improve our products and services.
By adhering to these principles, we hope to create a culture of respect that benefits everyone in our group.
