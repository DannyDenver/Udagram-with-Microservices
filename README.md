Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The GITHUB repo can be found here: https://github.com/DannyDenver/Udagram-with-Microservices

The project is split into five parts:
1. [The Simple Frontend](https://github.com/DannyDenver/Udagram-with-Microservices/tree/master/udacity-c3-frontend with starter code https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend )   
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]

2. [The RestAPI Backend Feed Service](https://github.com/DannyDenver/Udagram-with-Microservices/tree/master/udacity-c3-restapi-feed with starter code https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. The feed service returns an array of images with captions. [Covered in the course]

3. [The RestAPI Backend Users Service](https://github.com/DannyDenver/Udagram-with-Microservices/tree/master/udacity-c3-restapi-users with starter code https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. The users service manages who is logged in and if they can post a picture.

4. [The Image Filtering Microservice](https://github.com/DannyDenver/Udagram-with-Microservices/tree/master/udagram-filter with starter code https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images into black and white images.

5. [The Backend Proxy] https://github.com/DannyDenver/Udagram-with-Microservices/tree/master/udacity-c3-deployment/docker, used to divert api calls between the users, feed and filter microservice. 
