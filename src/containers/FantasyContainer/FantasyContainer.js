import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './FantasyContainer.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";



const FantasyContainer = () => {
  const { movies } = useSelector(state => state);
  const { favoriteMovies } = useSelector(state => state);
  const displayFantasyMovies = movies.filter(movie => movie.Genre.indexOf("Fantasy") != -1);
  const [focus, setFocus] = useRoveFocus(displayFantasyMovies.length);

  const fantasyMovies = displayFantasyMovies.map((film,index) => {
    return (
      <MovieCard
        key={film.Title}
        isAFavorite ={favoriteMovies.includes(film)}
      setFocus={setFocus}
      index={index}
      // focus={focus === index}
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