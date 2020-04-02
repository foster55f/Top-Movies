import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './MysteryDramaContainer.css';


const MysteryDramaContainer = () => {
  const { movies } = useSelector(state => state);
  const displayMysteryDramaMovies = movies.filter(movie => movie.Genre.indexOf("Mystery") != -1 && movie.Genre.indexOf("Drama") != -1);
  const mysteryDramaMovies = displayMysteryDramaMovies.map((film,index) => {
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
      {mysteryDramaMovies}
    </div>
  )
}

export default MysteryDramaContainer