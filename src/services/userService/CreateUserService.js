const appError = require("../../util/appError");
const { hash, compare } = require("bcrypt");

class CreateUserService {
  constructor(repository) {
    this.repository = repository;
  }

  async create ({ name, email, password }){
    const hashedPassword = await hash(password, 8);
    const CheckEmailExists = await this.repository.utils.findEmail(email);

    if(CheckEmailExists) {
      throw new appError("Este email já está uso");
    }

    const userCreated = await this.repository.insert({ name, email, hashedPassword });
    return userCreated
  }

  async update({id, name, email, password, old_password}) {
    const userSavedPassword = await this.repository.utils.findPassword(id); 
    let hashedPassword;

      if(password) {
        if(!old_password) {
          throw new appError("Necessário informar a senha atual.")
        }
  
        const checkOldPassword = await compare(old_password, userSavedPassword.password);
        
        if (checkOldPassword === false) {
          throw new appError("A senha atual está incorreta.")  
        }
        
        hashedPassword = await hash(password, 8)
      };
      
      hashedPassword = hashedPassword ?? userSavedPassword.password;
     
      const updated_at = this.repository.utils.currentTime();
  
      await this.repository.update({id, name, email, hashedPassword, updated_at});
   
  }

  async delete(id) {
    await this.repository.delete(id);
    return
  }
}

module.exports= CreateUserService;