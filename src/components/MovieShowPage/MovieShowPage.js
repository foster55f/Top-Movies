import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovies, removeFavoriteMovies } from '../../actioncreators';
import EscapeListen from "../../components/EscapeListen/EscapeListen";
import './MovieShowPage.css';
import { withRouter } from 'react-router-dom';



const MovieShowPage = (props, history) => {
  const { movies } = useSelector(state => state);
  const [currentKey, setCurrentKey] = useState(null);
  const { favoriteMovies} = useSelector(state => state);
  const dispatch = useDispatch();
  const isAFavorite = favoriteMovies.find(film => film.imdbID === props.movie.imdbID);
  const [hasBeenFavorited, setFavorite] = useState(favoriteMovies.includes(isAFavorite));

  useEffect(() => {
    const handleKeyPress = (event) => {
      setCurrentKey(event.keyCode);
      if(event.keyCode === 27) {
        props.history.push("/")
      }
    }
    document.addEventListener('keydown', handleKeyPress);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });


  const pickFavoriteMovies = (id) => {
    setFavorite(true)
    const favorite = movies.find(film => {
        return film.Title === id
    })
    dispatch(addFavoriteMovies(favorite))
  }

  const removeFavorite = (id) => {
    setFavorite(false)
    const favorite = movies.find(film => {
        return film.Title === id
    })
    dispatch(removeFavoriteMovies(favorite))
  }
  

    return (
    <section className='movie-show-page'>
        <div className='movie-poster' style={{backgroundImage: `url(${props.movie.Poster})`}}/>
        <div className='movie-detail-container'>
          <div className='top-movie-details'>
        <h1>{props.movie.Title}</h1>
          <div className ='movie-details'>
            <h2>{props.movie.Genre}</h2>
            <h2>{props.movie.Year}</h2>
            <h2>{props.movie.Runtime}</h2>
            <h2>Rating: {props.movie.Rated}</h2>
          </div>
          {!hasBeenFavorited &&
            <button id={props.movie.Title}
              onClick={event => pickFavoriteMovies(event.target.id)}
              onKeyPress={event => this.handleKeyPress(event)}
            >Add Favorite</button>
          }
          {hasBeenFavorited &&
            <button id={props.movie.Title}
              onClick={event => removeFavorite(event.target.id)}
              onKeyPress={event => this.handleKeyPress(event)}
            >Remove Favorite</button>
              
            }
            </div>
            <h3>Plot</h3>
            <p>{props.movie.Plot}</p>  
            <h3>Directed By</h3>
            <p>{props.movie.Director}</p>    
            <h3>Production</h3>
            <p>{props.movie.Production}</p>    
          <h3>Starring</h3>
          <div>
            <ul>
      {props.movie.Actors.split(',').map((item,i) => 
        <li key={i}>{item}</li>
      )}
            </ul>
            </div>
        </div> 
      </section>
    )
}


export default withRouter(MovieShowPage);

