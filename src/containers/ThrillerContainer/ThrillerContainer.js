import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './ThrillerContainer.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";
import React, { useState} from "react";



const ThrillerContainer = () => {
  const { movies } = useSelector(state => state);
  const { favoriteMovies } = useSelector(state => state);
  const displayThrillerMovies = movies.filter(movie => movie.Genre.indexOf("Thriller") != -1);
  const [currentFocus, setCurrentFocus] = useRoveFocus(displayThrillerMovies.length);
  const [containernumber] = useState(5);


  const thrillerMovies = displayThrillerMovies.map((film,index) => {
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
      {thrillerMovies}
    </div>
  )
}

export default ThrillerContainer