const express = require("express");
const recipeRouter = require("./recipes");

const apiRouter = express.Router();

apiRouter.use("/recipes", recipeRouter);

module.exports = apiRouter;
