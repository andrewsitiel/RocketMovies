const { Router } = require("express");
const moviesRouter = Router();

const MoviesController = require("../controllers/moviesController");
const controller = new MoviesController();

moviesRouter.get("/", controller.index);
moviesRouter.get("/:id", controller.show);
moviesRouter.post("/", controller.create);
moviesRouter.put("/:movie_id", controller.update);
moviesRouter.delete("/:movie_id", controller.delete);

module.exports = moviesRouter;