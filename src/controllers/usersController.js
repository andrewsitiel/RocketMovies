const knex = require("../database/knex/index");
const { hash, compare } = require("bcrypt");
const appError = require("../util/appError");

class UsersController { 

  async create (request, response) {
    const {name, email, password} = request.body

    const hashedPassword = await hash(password, 8);
    
    await knex("users").insert({name, email, password: hashedPassword});

    return response.status(200).json("Usuário criado!");
  };

  async show (request, response) {
    const { id } = request.user;

    const user = await knex("users").where({ id }).first("name", "email", "updated_at");

    return response.status(200).json(user);
  }

  async update (request, response) {
    const { id } = request.user;
    const { name, email, password, old_password } = request.body;

    const userSavedPassword = await knex("users").where({id}).first("password"); 
    let hashedPassword;
    if(password){
      if(!old_password) {
        throw new appError("Necessário informar senha antiga.")
      }

      const checkOldPassword = await compare(old_password, userSavedPassword.password);
      
      if (checkOldPassword === false) {
        throw new appError("A senha antiga está incorreta")  
      }
      hashedPassword = await hash(password, 8)
    };

    hashedPassword= hashedPassword ?? userSavedPassword.password;
   
    const updated_at = knex.fn.now();

    await knex("users").where({id}).update({name, email, password: hashedPassword, updated_at});

    return response.status(200).json();
  };

  async delete (request, response) {
    const { id } = request.user;

    await knex("users").where({id}).delete();

    return response.status(200).json("Usuário deletado.");
  };
}

module.exports= UsersController;