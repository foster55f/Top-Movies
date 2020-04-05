import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './FavoritesContainer.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";
import React, { useState} from "react";





const FavoritesContainer = () => {
  const { favoriteMovies } = useSelector(state => state);
  const [currentFocus, setCurrentFocus] = useRoveFocus(favoriteMovies.length);
  const [containerNumber] = useState(6);


  const favorites = favoriteMovies.map((film,index) => {
    return (
      <MovieCard
        key={film.Title}
        containerNumber={containerNumber}
        containerFocus={currentFocus}
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
    <div className='movie-container' index={8}>       
      {favorites}
    </div>
  )
}

export default FavoritesContainer