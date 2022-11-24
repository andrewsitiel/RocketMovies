const{ Router } = require("express");
const userRoutes = Router();

const UsersController = require("../controllers/usersController");Router
const controller = new UsersController();
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

userRoutes.get("/", ensureAuthenticated, controller.show);
userRoutes.post("/", controller.create);
userRoutes.put("/", ensureAuthenticated, controller.update);
userRoutes.delete("/", ensureAuthenticated, controller.delete);

module.exports = userRoutes;