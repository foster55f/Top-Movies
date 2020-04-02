import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './ActionContainer.css';


const ActionContainer = () => {
  const { movies } = useSelector(state => state);
  const displayActionMovies = movies.filter(movie => movie.Genre.indexOf("Action") != -1);
  const actionMovies = displayActionMovies.map((film,index) => {
    return (
      <MovieCard
      key={index}
      id= {film.imdbID}
      Title={film.Title}
      Poster={film.Poster} 
      />
    )
  });
  
  return (
    <div className='movie-container' >       
      {actionMovies}
    </div>
  )
}

export default ActionContainer