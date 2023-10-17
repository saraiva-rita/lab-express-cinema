const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');

// Display all movies
router.get('/movies', async (req, res) => {
  try {
    let moviesFromDB = await Movie.find();
    console.log('Movies from database:', moviesFromDB);
    res.render('movies/movies.hbs', {
      movies: moviesFromDB,
    });
  } catch (error) {
    console.log('Error while getting the movies', error);
  }
});

// Display the movie details
router.get('/movies/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    let foundMovie = await Movie.findById(movieId);
    res.render('movies/movie-details.hbs', foundMovie);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
