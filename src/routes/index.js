const { Router } = require("express")
const router = Router();

const userRoutes = require("./users.routes");
const moviesRouter = require("./movies.routes");

router.use("/users", userRoutes);
router.use("/movies", moviesRouter);

module.exports = router;