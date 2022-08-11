const knex = require("knex");

class UsersController { 
  async create (request, response) {
    const {id, name, email, password} = reques.body

    await knex("users").insert({id, name, email, password})
  }
}

module.exports= UsersController;