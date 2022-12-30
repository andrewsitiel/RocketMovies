const { Router } = require("express");
const userRoutes = Router();

const UsersController = require("../controllers/usersController");
const AvatarController = require("../controllers/uploadController");

const controller = new UsersController();
const avatarController = new AvatarController();

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const multer = require("multer");
const uploadConfig = require("../config/upload");
const upload = multer(uploadConfig.MULTER);

userRoutes.post("/", controller.create);
userRoutes.put("/", ensureAuthenticated, controller.update);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), avatarController.update);
userRoutes.delete("/", ensureAuthenticated, controller.delete);

module.exports = userRoutes;