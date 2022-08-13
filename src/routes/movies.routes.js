const { Router } = require("express");
const moviesRouter = Router();

const MoviesController = require("../controllers/moviesController");
const controller = new MoviesController();

moviesRouter.post("/",controller.create);
moviesRouter.put("/:movie_id",controller.update);

module.exports = moviesRouter;