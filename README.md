# RocketMovies

Back-End of an application for personal review of movies with NodeJs and using SQLite as SGBD.

## Techs

- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/index.html)

## Routes

### /users

The users routes supports *get*, *post*, *put* and *delete* methods:

- ```show``` - needs an id for identify the user.
- ```put```  - also needs an id for identify the user.
- ```delete``` - the same of above methods.
- ```post``` - don't requires params, only body data (JSON).

### /movies

The notes routes supports *get*, *post*, *put* and *delete* methods:

- ```index``` - don't requires params.
- ```show``` -  needs the user's id.
- ```put```  - needs the movie id.
- ```delete``` - also require the movie id.
- ```post``` - don't requires params, only body data (JSON) including the user_id.

### /tags
- the tags route supports the *get* method, to **show** all user registered tags. Needs the user_id for identify the tags.

## How to use

 After install all dependencies (with ```npm install```), just run ```npm start``` in terminal for initialize the server. The standart port is 3000 but is changeable in server.js archive.
