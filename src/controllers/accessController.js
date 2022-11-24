const knex = require("../database/knex");

const { sign } = require("jsonwebtoken");
const { compare } = require("bcrypt");

const AppError = require("../util/appError");
const authConfig = require("../config/jwt");

class Access {

  async create( request, response ) {
    const {email , password} = request.body;

    const user = await knex("users").where({email}).first();

    if(!user) {
      throw new AppError("Credenciais inválidas");
    }

    const checkPassword = await compare(password, user.password);

    if(!checkPassword) {
      throw new AppError("Credenciais inválidas");
    }

    const {secret, expiresIn} = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return response.status(200).json({user, token})
  } 

}

module.exports = Access;