const{ Router } = require("express");
const userRoutes = Router();

const UsersController = require("../controllers/usersController");Router
const usersController = new UsersController();

userRoutes.post("/", usersController.create);

module.exports = userRoutes;