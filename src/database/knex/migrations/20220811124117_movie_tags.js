
exports.up = knex => knex.schema.createTable("movie_tags", (table) => {
  table.increments("id").notNullable()
  table.text("name")
  table.integer("movie_id").references("id").inTable("movies").onDelete("CASCADE")
  table.integer("user_id").references("id").inTable("users")
});


exports.down = knex => knex.schema.dropTable("movie_tags");
