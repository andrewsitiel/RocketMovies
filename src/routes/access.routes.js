const { Router } = require("express");
const accessRouter = Router();

const AccessController = require("../controllers/accessController");
const controller = new AccessController();

accessRouter.post("/", controller.create)

module.exports= accessRouter;