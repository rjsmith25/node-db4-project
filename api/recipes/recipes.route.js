const express = require("express");
const {
  getAllRecipes,
  getIngredients,
  getRecipeInstruction
} = require("./recipes.controller");

const recipesRouter = express.Router();

recipesRouter.get("/", getAllRecipes);
recipesRouter.get("/:id/ingredients", getIngredients);
recipesRouter.get("/:id/instructions", getRecipeInstruction);

module.exports = recipesRouter;
