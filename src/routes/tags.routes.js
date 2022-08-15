const { Router } = require("express");
const tagsRouter = Router();

const TagsController = require("../controllers/tagsController");
const controller = new TagsController();

tagsRouter.get("/:user_id", controller.index);
tagsRouter.delete("/:id", controller.delete);

module.exports = tagsRouter;