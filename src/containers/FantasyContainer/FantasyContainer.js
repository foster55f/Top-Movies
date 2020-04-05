import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './FantasyContainer.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";
import React, { useState} from "react";






const FantasyContainer = () => {
  const { movies } = useSelector(state => state);
  const { favoriteMovies } = useSelector(state => state);
  const displayFantasyMovies = movies.filter(movie => movie.Genre.indexOf("Fantasy") != -1);
  const [currentFocus, setCurrentFocus] = useRoveFocus(displayFantasyMovies.length);
  const [containerNumber] = useState(4);



  const fantasyMovies = displayFantasyMovies.map((film,index) => {
    return (
      <MovieCard
        key={film.Title}
        containerNumber={containerNumber}
        containerFocus={currentFocus}
        isAFavorite ={favoriteMovies.includes(film)}
      setFocus={setCurrentFocus}
      index={index}
      focus={currentFocus.leftRight === index}
      character={film.Title}
      key={index}
      id= {index}
      Title={film.Title}
      Poster={film.Poster} 
      />
    )
  });
  
  return (
    <div className='movie-container' >       
      {fantasyMovies}
    </div>
  )
}

export default FantasyContainer