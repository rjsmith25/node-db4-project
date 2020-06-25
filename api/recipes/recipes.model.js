const db = require("../../data/dbConfig");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes")
    .select("ingredients.id", "ingredients.name", "ingredients.quantity")
    .join("ingredients", "recipes.id", "=", "ingredients.recipe_id")
    .where("recipe_id", recipe_id);
}

function getInstructions(recipe_id) {
  return db("recipes")
    .select("instructions")
    .where("id", recipe_id)
    .first();
}

module.exports = { getRecipes, getShoppingList, getInstructions };
