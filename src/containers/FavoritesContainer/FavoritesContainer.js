import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './FavoritesContainer.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";




const FavoritesContainer = () => {
  const { favoriteMovies } = useSelector(state => state);
//   const [focus, setFocus] = useRoveFocus(favoriteMovies.length);

  const favorites = favoriteMovies.map((film,index) => {
    return (
      <MovieCard
      key={film.Title}
    //   setFocus={setFocus}
      index={index}
    //   focus={focus === index}
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