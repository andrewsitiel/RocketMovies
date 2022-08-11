const knex = require("../database/knex/index");
const { hash } = require("bcrypt");

class UsersController { 
  async create (request, response) {
    const {name, email, password} = request.body

    const hashedPassword = await hash(password, 8);
    
    await knex("users").insert({name, email, password: hashedPassword});

    return response.status(200).json()
  }
}

module.exports= UsersController;