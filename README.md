# RocketMovies

Back-End of an application for personal review of movies with NodeJs and using SQLite as SGBD.

## Techs

- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/index.html)

## Routes

### /users

The users routes supports *get*, *post*, *put* and *delete* methods:

- ```get``` - needs an id for identify the user (params).
- ```put```  - also needs an id for identify the user (params).
- ```delete``` - the same of above methods (params).
- ```post``` - don't requires params, only body data (JSON).

### /movies

The movies routes supports *get*, *post*, *put* and *delete* methods:

- ```get``` (index) - don't requires params, only body data (JSON) including the user_id.
- ```post``` - same as index.
- ```get``` (show) -  needs the user's id (params).
- ```put```  - needs the movie id (params).
- ```delete``` - also require the movie id (params).

### /tags
 The tags route supports the *get* and *delete* methods:

- ```get``` (index) - needs the user_id in (params).
- ```delete``` - needs tag's id (params).

## How to use

 After install all dependencies (with ```npm install```), just run ```npm start``` in terminal for initialize the server. The standart port is 3000 but is changeable in server.js archive.
