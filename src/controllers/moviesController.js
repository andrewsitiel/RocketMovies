const knex = require("../database/knex/index");
class MoviesController {

  async index (request, response) {
    const { user_id } = request.query;

    const allUserMovies = await knex("movies")
    .where({ user_id })
    .orderBy("created_at");

    const moviesTags = await knex("movie_tags").where({user_id}).orderBy("name")

    const allUserMoviesWithTags = allUserMovies.map(
      movie => {
        const movieTags = moviesTags.filter(tag => tag.movie_id === movie.id);
        return {
          ...movie,
          tags: movieTags.map(tag => tag.name)
        }
      });

    return response.status(200).json(allUserMoviesWithTags);
  };

  async create (request, response) {

    const { title, description, rating, user_id, tags } = request.body;

    const invalidRate = Number(rating) > 5 || Number(rating) < 0;

    if (invalidRate)
    { return response.status(200).json("Digite uma nota válida") };
    
    const movie_id = await knex("movies").insert( {title, description, rating, user_id} );

    const movie = await knex("movies")
    .where({id: movie_id})
    .select("title", "description", "rating", "cover", "created_at")
    .first();

    if(tags)
      { 
        const movieTags = tags.map(
          tag => {
            return {
              name: tag,
              movie_id,
              user_id
            }
        })

        await knex("movie_tags").insert(movieTags);
      }
    
    return response.status(200).json(movie);
  };

  async show (request, response) {
    const { id } = request.params;

    const movie = await knex("movies")
    .where({ id })
    .select("title", "description", "rating", "created_at", "updated_at")
    .first();

    const movieTags = await knex("movie_tags")
    .where({ movie_id: id })
    .select("name")
    .orderBy("name");

    const movieWithTags = {
      ...movie,
      tags: movieTags.map( tagName => tagName.name)
    };

    return response.status(200).json(movieWithTags);
  };

  async update (request, response) {
    const { movie_id } = request.params;

    const { title, description, rating, cover } = request.body;

    const invalidRate = Number(rating) > 5 || Number(rating) < 0;
    
    if (invalidRate)
    { return response.status(200).json("Digite uma nota válida") };
    
    await knex("movies")
    .where({id:movie_id})
    .update({title, description, rating, cover});

    const movie = await knex("movies")
    .where({id: movie_id})
    .select("title", "description", "rating", "cover", "created_at", "updated_at")
    .first();

    return response.status(200).json(movie);
  };

  async delete (request, response) {
    const { movie_id } = request.params;

    await knex("movies").where({id: movie_id}).delete();

    return response.status(200).json("Filme deletado.");
  };
}

module.exports = MoviesController;