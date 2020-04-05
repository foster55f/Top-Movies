import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './MovieContainer2018.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";
import React, { useState} from "react";







const MovieContainer2018 = () => {
  const { movies } = useSelector(state => state);
  const { favoriteMovies } = useSelector(state => state);
  const displayTopMovies2018 = movies.filter(movie => movie.Year === '2018')
  const [currentFocus, setCurrentFocus] = useRoveFocus(displayTopMovies2018.length);
  const [containernumber] = useState(1);



  const movies2018 = displayTopMovies2018.map((film, index) => {
    

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
    <div className='movie-container' >       
      {movies2018}
    </div>
  )
}

export default MovieContainer2018