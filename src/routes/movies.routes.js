const { Router } = require("express");
const moviesRouter = Router();

const MoviesController = require("../controllers/moviesController");
const controller = new MoviesController();
const ensureAuthenticated = require("../middleware/ensureAuthenticated");

moviesRouter.get("/", ensureAuthenticated, controller.index);
moviesRouter.get("/:movie_id", ensureAuthenticated, controller.show);
moviesRouter.post("/", ensureAuthenticated, controller.create);
moviesRouter.put("/:movie_id", ensureAuthenticated, controller.update);
moviesRouter.delete("/:movie_id", ensureAuthenticated, controller.delete);

module.exports = moviesRouter;