const { Router } = require("express")
const router = Router();

const userRoutes = require("./users.routes");
const accessRoutes = require("./access.routes");
const moviesRoutes = require("./movies.routes");
const tagsRoutes = require("./tags.routes");

router.use("/users", userRoutes);
router.use("/access", accessRoutes);
router.use("/movies", moviesRoutes);
router.use("/tags", tagsRoutes);

module.exports = router;