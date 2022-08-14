const knex = require("express");

class TagsController {
  
  async index (request, response) {
    const { user_id } = request.params;

    const allTags = await knex("movie_tags").where({ user_id }).orderBy("name");

    return response.status(200).json(allTags);
  };
}