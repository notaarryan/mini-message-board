const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = new Router();

indexRouter.get("/", indexController.renderIndex);
indexRouter.get("/new", indexController.renderNewMessagePage);

module.exports = indexRouter;
