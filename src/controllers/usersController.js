const CreateUserService  = require("../services/userService/CreateUserService");
const UserRepository = require("../repositories/UserRepository");

class UsersController {
  async create (request, response) {
    const {name, email, password} = request.body;

    const userRepository = new UserRepository();
    const userService = new CreateUserService(userRepository);

    await userService.create({name, email, password});

    return response.status(200).json("Usuário criado!");
  };

  async update (request, response) {
    const { id } = request.user;
    const { name, email, password, old_password } = request.body;

    const userRepository = new UserRepository();
    const userService = new CreateUserService(userRepository);

    await userService.update({id, name, email, password, old_password})

    return response.status(200).json("Usuário atualizado com sucesso!");
  };

  async delete (request, response) {
    const { id } = request.user;

    const userRepository = new UserRepository();
    const userService = new CreateUserService(userRepository);

    userService.delete(id)

    return response.status(200).json("Usuário deletado.");
  };
}

module.exports= UsersController;