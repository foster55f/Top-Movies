import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './ThrillerContainer.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";



const ThrillerContainer = () => {
  const { movies } = useSelector(state => state);
  const displayThrillerMovies = movies.filter(movie => movie.Genre.indexOf("Thriller") != -1);
  const [focus, setFocus] = useRoveFocus(displayThrillerMovies.length);
  const thrillerMovies = displayThrillerMovies.map((film,index) => {
    return (
      <MovieCard
      key={film.Title}
      setFocus={setFocus}
      index={index}
      focus={focus === index}
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
      {thrillerMovies}
    </div>
  )
}

export default ThrillerContainer