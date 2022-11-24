const knex = require("../database/knex/index");

class TagsController {
  
  async index (request, response) {
    const user_id = request.user.id;
    
    const allMovieTags = await knex("movie_tags").where({user_id}).select("name").orderBy("name");
  
    return response.status(200).json(allMovieTags);
  };

  async delete(request, response) {
    const { id } = request.params;

    await knex("movie_tags").where({id}).delete()

    return response.status(200).json("Tag deletada.");
  };
}

module.exports = TagsController;