exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("instructions", 255).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.float("quantity").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
