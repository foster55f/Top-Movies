import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector,  } from 'react-redux';
import './MovieContainer2019.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";
import React, { useState } from "react";



const MovieContainer2019 = () => {
  const { movies, favoriteMovies } = useSelector(state => state);
  const displayTopMovies2019 = movies.filter(movie => movie.Year === '2019');
  const [containernumber] = useState(0);
  const [currentFocus, setCurrentFocus] = useRoveFocus(displayTopMovies2019.length);


  const movies2019 = displayTopMovies2019.map((film, index) => {
    return (
      <MovieCard
        key={film.Title}
        containernumber={containernumber}
        containerFocus={currentFocus}
        isAFavorite ={favoriteMovies.includes(film)}
        setFocus={setCurrentFocus}
        index={index}
        focus={currentFocus.leftRight === index}
        character={film.Title}
        key={index}
        id= {film.imdbID}
        Title={film.Title}
        Poster={film.Poster} 
      />
    )
  });
  
  return (
    <div className='movie-container'>       
      {movies2019}
    </div>
  )
}

export default MovieContainer2019