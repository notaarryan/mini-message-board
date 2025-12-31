const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = new Router();

indexRouter.get("/", indexController.renderIndex);
indexRouter.post("/", indexController.setUserName);
indexRouter.get("/new", indexController.renderNewMessagePage);
indexRouter.post("/new", indexController.handleNewMessage);

module.exports = indexRouter;
