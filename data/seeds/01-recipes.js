exports.seed = function(knex) {
  // Inserts seed entries
  return knex("recipes").insert([
    {
      name: "Fluffy Pancakes",
      instructions:
        "Combine milk with vinegar in a medium bowl and set aside for 5 minutes to sour.Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into soured milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side."
    },
    {
      name: "Chicken Parmesan",
      instructions:
        "Preheat an oven to 450 degrees F (230 degrees C).Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper.Beat eggs in a shallow bowl and set aside.Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside etc..."
    },
    {
      name: "Best Steak Marinade in Existence",
      instructions:
        "Place the soy sauce, olive oil, lemon juice, Worcestershire sauce, garlic powder, basil, parsley, and pepper in a blender. Add hot pepper sauce and garlic, if desired. Blend on high speed for 30 seconds until thoroughly mixed.Pour marinade over desired type of meat. Cover, and refrigerate for up to 8 hours. Cook meat as desired."
    }
  ]);
};
