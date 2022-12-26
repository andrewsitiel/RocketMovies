const knex = require("../database/knex/index");

class UserRepository {
  async insert({ name, email, password }) {
    const userCreated = await knex("users").insert({name, email, password});
    return userCreated
  }

  async findEmail(email) {
    const existentEmail= await knex("users").where({email}).first("email");
    return existentEmail;
  }
}

module.exports = UserRepository;