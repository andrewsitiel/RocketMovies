const { Router } = require("express");
const tagsRouter = Router();

const TagsController = require("../controllers/tagsController");
const controller = new TagsController();
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

tagsRouter.get("/", ensureAuthenticated, controller.index);
tagsRouter.delete("/:id", ensureAuthenticated, controller.delete);

module.exports = tagsRouter;