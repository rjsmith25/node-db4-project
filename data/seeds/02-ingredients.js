exports.seed = function(knex) {
  return knex("ingredients").insert([
    { recipe_id: 1, name: "cup milk", quantity: 0.75 },
    { recipe_id: 1, name: "tablespoons white vinegar", quantity: 2 },
    { recipe_id: 1, name: "cup all-purpose flour", quantity: 1 },
    { recipe_id: 1, name: "tablespoons white sugar", quantity: 2 },
    {
      recipe_id: 2,
      name: "eaches skinless, boneless chicken breast halves",
      quantity: 4
    },
    {
      recipe_id: 2,
      name: "pinch salt and freshly ground black pepper to taste",
      quantity: 1
    },
    {
      recipe_id: 2,
      name: "eggs",
      quantity: 2
    },
    {
      recipe_id: 2,
      name: "cup panko bread crumbs, or more as needed",
      quantity: 1
    },
    {
      recipe_id: 3,
      name: "cup soy sauce",
      quantity: 0.33333333333
    },
    {
      recipe_id: 3,
      name: "cup olive oil",
      quantity: 0.5
    },
    {
      recipe_id: 3,
      name: "cup fresh lemon juice",
      quantity: 0.33333333333
    },
    {
      recipe_id: 3,
      name: "cup Worcestershire sauce",
      quantity: 0.25
    }
  ]);
};
