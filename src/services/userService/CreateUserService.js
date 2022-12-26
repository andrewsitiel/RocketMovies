const appError = require("../../util/appError");
const { hash } = require("bcrypt");

class CreateUserService {
  constructor(repository) {
    this.repository = repository;
  }

  async create ({ name, email, password }){
    const hashedPassword = await hash(password, 8);
    const CheckEmailExists = await this.repository.findEmail(email);

    if(CheckEmailExists) {
      throw new appError("Este email já está uso");
    }

    const userCreated = await this.repository.insert({ name, email, hashedPassword });
    return userCreated
  } 

}

module.exports= CreateUserService;