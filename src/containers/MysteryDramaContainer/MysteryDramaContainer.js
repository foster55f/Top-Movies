import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './MysteryDramaContainer.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";
import React, { useState} from "react";


const MysteryDramaContainer = () => {
  const { movies, favoriteMovies } = useSelector(state => state);
  const displayMysteryDramaMovies = movies.filter(movie => movie.Genre.indexOf("Mystery") !== -1 && movie.Genre.indexOf("Drama") != -1);
  const [currentFocus, setCurrentFocus] = useRoveFocus(displayMysteryDramaMovies.length);
  const [containernumber] = useState(2);

  const mysteryDramaMovies = displayMysteryDramaMovies.map((film,index) => {
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
      {mysteryDramaMovies}
    </div>
  )
}

export default MysteryDramaContainer