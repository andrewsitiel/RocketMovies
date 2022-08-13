const knex = require("../database/knex/index");

class MoviesController {

  async create (request, response) {

    const { title, description, rating, user_id } = request.body;
    
    await knex("movies").insert( {title, description, rating, user_id} );

    const movie = await knex("movies")
    .where({id: movie_id})
    .select("title", "description", "rating", "cover", "created_at")
    .first()
  
    return response.status(200).json(movie);
  };

  async update (request, response) {
    const { movie_id } = request.params;

    const { title, description, rating, cover } = request.body;
    
    await knex("movies")
    .where({id:movie_id})
    .update({title, description, rating, cover});

    const movie = await knex("movies")
    .where({id: movie_id})
    .select("title", "description", "rating", "cover", "created_at", "updated_at")
    .first()

    response.status(200).json(movie);
  };
}

module.exports = MoviesController;