const Recipes = require("./recipes.model");

async function getAllRecipes(req, res) {
  try {
    let recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (e) {
    res.status(500).json({ message: "Unable to get recipes" });
  }
}

async function getIngredients(req, res) {
  let { id } = req.params;
  try {
    let ingredients = await Recipes.getShoppingList(id);
    res.status(200).json(ingredients);
  } catch (e) {
    res.status(500).json({ message: "Unable to get ingredients" });
  }
}

async function getRecipeInstruction(req, res) {
  let { id } = req.params;
  try {
    let instructions = await Recipes.getInstructions(id);
    res.status(200).json(instructions);
  } catch (e) {
    res.status(500).json({ message: "Unable to get instructions" });
  }
}

module.exports = { getAllRecipes, getIngredients, getRecipeInstruction };
