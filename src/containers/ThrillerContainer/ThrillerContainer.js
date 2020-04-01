import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './ThrillerContainer.css';


const ThrillerContainer = () => {
  const { movies } = useSelector(state => state);
  const displayThrillerMovies = movies.filter(movie => movie.Genre.indexOf("Thriller") != -1);
  const thrillerMovies = displayThrillerMovies.map((film,index) => {
    return (
      <MovieCard
      key={index}
      id= {index}
      Title={film.Title}
      Poster={film.Poster} 
      />
    )
  });
  
  return (
    <div className='movie-container' >       
      {thrillerMovies}
    </div>
  )
}

export default ThrillerContainer