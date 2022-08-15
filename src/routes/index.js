const { Router } = require("express")
const router = Router();

const userRoutes = require("./users.routes");
const moviesRouter = require("./movies.routes");
const tagsRouter = require("./tags.routes");

router.use("/users", userRoutes);
router.use("/movies", moviesRouter);
router.use("/tags", tagsRouter);

module.exports = router;