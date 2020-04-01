import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';
import { useSelector } from 'react-redux';
import './MovieContainer.css';


export const MovieContainer = () => {
  const { movies } = useSelector(state => state);
  return (
    <div className='movie-container'>
      {movies.map(film => {
        return (
          <MovieCard
            Title={film.Title}
            Year={film.Year}
            Rated={film.Rated}
            Released={film.Released}
            Runtime={film.Runtime}
            Genre={film.Genre}
            Director={film.Director}
            Writers={film.Writers}
            Actors={film.Actors}
            Plot={film.Plot}
            Language={film.Language}
            Country={film.Country}
            Awards={film.Awards}
            Poster={film.Poster}            
          />
        )
      })}
    </div>
  )
}



export default MovieContainer