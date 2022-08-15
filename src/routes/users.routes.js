const{ Router } = require("express");
const userRoutes = Router();

const UsersController = require("../controllers/usersController");Router
const controller = new UsersController();

userRoutes.get("/:id", controller.show);
userRoutes.post("/", controller.create);
userRoutes.put("/:id", controller.update);
userRoutes.delete("/:id", controller.delete);

module.exports = userRoutes;