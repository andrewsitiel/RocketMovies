const knex = require("../database/knex/index");
const { hash, compare } = require("bcrypt");

class UsersController { 

  async show (request, response) {
    const { id } = request.params;

    const user = await knex("users").where({ id }).select("name", "email", "updated_at").first();

    return response.status(200).json(user);
  }

  async create (request, response) {
    const {name, email, password} = request.body

    const hashedPassword = await hash(password, 8);
    
    const user =await knex("users").insert({name, email, password: hashedPassword});

    return response.status(200).json("Usuário criado!");
  };

  async update (request, response) {
    const { id } = request.params;
    const { name, email, password, old_password } = request.body;

    const userSavedPassword = await knex("users").where({id}).select("password").first(); 
    let hashedPassword;
    
    if(password){
      if(!old_password) 
        { return response.status(200).json("Necessário informar senha antiga.") }

      const checkOldPassword = await compare(old_password, userSavedPassword.password);
      
      if (checkOldPassword)
        { hashedPassword = await hash(password, 8) } 
      else 
        { return response.status(200).json("A senha antiga está incorreta") };
    };

    const updated_at = knex.fn.now();

    await knex("users").where({id}).update({name, email, password: hashedPassword, updated_at});

    return response.status(200).json();
  };

  async delete (request, response) {
    const { id } = request.params;

    await knex("users").where({id}).delete();

    return response.status(200).json("Usuário deletado.");
  };
}

module.exports= UsersController;