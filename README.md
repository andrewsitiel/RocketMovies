# RocketMovies

Back-End of an application for management of notes developed with NodeJs and using SQLite3 as SGBD.

## Techs

- [Express](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/index.html)

## Routes

### /users

The users route supports *post* and *put* methods to **create** and **update** users in database. The put method needs an id param for identify the correct user.

### /notes

The notes routes supports *get*, *post*, *put* and *delete* methods to **show** an especific note, to **update** an note, to **delete** an note and an index to **query** an note for his title, tags or only for the user's id (list all user's notes). All methods requires an id param:

- ```show``` - needs an id for identify the note.
- ```put```  - also needs an id for identify the note.
- ```delete``` - the same of above methods.
- ```post``` - needs the user_id, for identify the owner of the note.
- ```index``` - require de user_id, and has title and tags search as optional. In this case, it's using queries and not params.

### /tags
- the tags route supports the *get* method, to **show** all user registered tags. Needs the user_id for identify the tags.

## How to use

 After install all dependencies (with ```npm install```), just run ```npm start``` in terminal for initialize the server. The standart port is 5000 but is changeable in server.js archive.
