import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { useSelector } from 'react-redux';
import './MovieContainer2019.css';
import useRoveFocus from "../../components/useRoveFocus/useRoveFocus";




const MovieContainer2019 = () => {
  const { movies } = useSelector(state => state);
  const { favoriteMovies } = useSelector(state => state);
  const displayTopMovies2019 = movies.filter(movie => movie.Year === '2019');
  const [focus, setFocus] = useRoveFocus(displayTopMovies2019.length);


 
  const movies2019 = displayTopMovies2019.map((film, index) => {
    return (
      <MovieCard
        key={film.Title}
        isAFavorite ={favoriteMovies.includes(film)}
        setFocus={setFocus}
        index={index}
        focus={focus === index}
        character={film.Title}
        key={index}
        id= {film.imdbID}
        Title={film.Title}
        Year={film.Year}
        Rated={film.Rated}
      Released={film.Released}
      Runtime={film.Runtime}
      Genre={film.Genre}
      Director={film.Director}
      Writers={film.Writers}
      Actors={film.Actors}
      Plot={film.Plot}
      Language={film.Language}
      Country={film.Country}
      Awards={film.Awards}
      Poster={film.Poster} 
      />
    )
  });
  
  return (
    <div className='movie-container' >       
      {movies2019}
    </div>
  )
}

export default MovieContainer2019