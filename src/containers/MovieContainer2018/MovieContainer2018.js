import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './MovieContainer2018.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";



const MovieContainer2018 = () => {
  const { movies } = useSelector(state => state);
  const displayTopMovies2018 = movies.filter(movie => movie.Year === '2018')
  const [focus, setFocus] = useRoveFocus(displayTopMovies2018.length);

  const movies2018 = displayTopMovies2018.map((film,index) => {
    return (
      <MovieCard
      key={film.Title}
      setFocus={setFocus}
      index={index}
      // focus={focus === index}
      character={film.Title}
      key={index}
      id= {film.imdbID}
      Title={film.Title}
      Poster={film.Poster} 
      />
    )
  });
  
  return (
    <div className='movie-container' >       
      {movies2018}
    </div>
  )
}

export default MovieContainer2018