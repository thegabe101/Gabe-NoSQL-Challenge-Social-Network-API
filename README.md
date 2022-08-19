# Gabe-NoSQL-Challenge-Social-Network-API

## Video Walkthrough Link:

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#Usage)
- [Bugs](#Bugs)
- [Screenshots](#screenshots)
- [Credits](#credits)

## Description

This was a back-end project focused on creating the supporting database for a social media app API. The theory of a fullstack application using this API would be to create a social media network allowing users to react to and post thoughts, a la Twitter.

- The motivation behind creating this project was further developing backend skills and working with two new pieces of tech, Mongoose ORM and MongoDB. This was our class' introduction to NoSQL, a powerful database methodology that is less rigid but with it's own quirks when put side by side with traditional MySQL. Throughout class we have been focused on the integration between front and back-end- this is precisely where SQL of any type comes into play. Although no front-end was created for this project, by developing our back-end skills, we are still able to envision how one might proceed with a full-stack application in this light.
- I built this project in order to gain experience in a NoSQL database environment. Both MongoDB and its partner tool Mongoose are integral parts of the NoSQL environment that many companies use today. It was interesting to see and learn about the differences between NoSQL and MySQL firsthand, and that experience could not be had without seeing in my own work how NoSQL populates and manages data in a different format and with different rigidity rules from MySQL. I also built this project with our final project, Project 3, in mind, knowing that MySQL may or may not fit what we want to do and keeping in mind that there might be other tools- like these ones- for the job.
- While this project may not currently have any real front-end utility or user-side experience in the browser world, it does represent an important step in creating the database that backs oft-used websites like social media, storefronts, and user-data servers or even libraries. In some of those cases MySQL may be a better choice, but NoSQL can be looked at as another tool in the toolbelt depending on what is required to properly manage data in a given scenario. Unique schema tools like virtuals and BSON mean that storing and retrieving data through MongoDB works differently from other databases, and that can be an extremely useful thing to know when approaching any project in the future.
- This was definitely a challenging project in the amount of back-end routing I had to do. Proper application of controllers to routes was an entirely new concept, and I really enjoy how much less messy it makes a route file- this is a practice I am likely, personally, to employ in the future. Separation of concerns is something I am a fan of, so increasingly complicated file structures don't scare me, even if I often make errors in linking them. Determining the precise relationship between thoughts, reactions, friends, and users was a confusing process but also a rewarding one, and re-emphasized the power and utility of a tool like Insomnia that can help to ensure things are routing properly and models are corresponding with data we are passing in. All in all I feel this was one of the most useful projects for me of the course as it strengthened my back-end skills without being discouraging in that it felt, despite lacking a frot-end, to have real-world utility.

## Installation

- Because there is no front end, this code must be run via node.js. Should you want to run it and try it yourself, feel free to clone the repo, and make sure to npm init and install all dependencies. You can then start the server and test out the database yourself using an application like Insomnia to check that data is being routed and retrieved properly.

## Usage

- There is no method of usage in the sense of utility for this app at the moment. It is purely for testing purposes. However, it is important to keep in mind when testing that a database such as this one could theoretically back a social media network of a developer's choosing. Usage would require creating a front-end and further developing the NoSQL side of the database to match all functionality.

## Bugs

- Currently there several bugs within the program:

1. Reactions are not properly posting to the thought body. There were issues with the virtuals regarding reactions, causing system-wide breakage. I removed them in order to get an MVP.
2. The time posted functions on thoughts and reactions are not working properly. This seems to be a model issue.

## Screenshots

- ![Alt= Screenshot showing server page in VS Code.](./screenshots/screenshot1.jpg)
- ![Alt= Screenshot showing user running the server using nodemon npm in the integrated terminal.](./screenshots/screenshot2.jpg)
- ![Alt= Screenshot showing the home page open in the browser window.](./screenshots/screenshot3.jpg)

## Credits

- This project could not have been completed without the hardwork and excellent advice of my educators at UW Fullstack and tutor, Jacob Carver.
