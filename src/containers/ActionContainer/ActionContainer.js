import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './ActionContainer.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";
import React, { useState} from "react";



const ActionContainer = () => {
  const { movies, favoriteMovies } = useSelector(state => state);
  const displayActionMovies = movies.filter(movie => movie.Genre.indexOf("Action") !== -1);
  const [currentFocus, setCurrentFocus] = useRoveFocus(displayActionMovies.length);
  const [containernumber] = useState(3);


  const actionMovies = displayActionMovies.map((film,index) => {
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