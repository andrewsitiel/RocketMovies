const knex = require("../database/knex/index");

class UserRepository {
  async insert({ name, email, hashedPassword: password }) {
    const userCreated = await knex("users").insert({name, email, password});
    return userCreated
  }

  async update({ id, name, email, hashedPassword, updated_at }) {
    await knex("users").where({id}).update({name, email, password: hashedPassword, updated_at});
    return
  }

  async delete (id) {
    await knex("users").where({id}).delete();
  }

  utils = {
    async findEmail(email) {
      const existentEmail = await knex("users").where({email}).first("email");
      return existentEmail;
    },
  
    async findPassword(id) {
      const userSavedPassword = await knex("users").where({id}).first("password");
      return userSavedPassword;
    },

    currentTime() {
      return knex.fn.now()
    }
  }
}

module.exports = UserRepository;