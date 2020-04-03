import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovies } from '../../actioncreators';
import EscapeListen from '../EscapeListen/EscapeListen';


import './MovieShowPage.css';


const MovieShowPage = (props) => {
  const { movies } = useSelector(state => state);
  const dispatch = useDispatch()

  const pickFavoriteMovies = (id) => {
    const favorite = movies.find(film => {
        return film.Title === id
    })
    dispatch(addFavoriteMovies(favorite))
  }
  

    return (
    <section className='movie-show-page'>
        <div className='movie-poster' style={{backgroundImage: `url(${props.movie.Poster})`}}/>
        <div>
        <h1>{props.movie.Title}</h1>
          <div className ='movie-details'>
            <h2>{props.movie.Genre}</h2>
            <h2>{props.movie.Year}</h2>
            <h2>{props.movie.Runtime}</h2>
            <h2>Rating: {props.movie.Rated}</h2>
          </div>
          <button id={props.movie.Title} onClick={event => pickFavoriteMovies(event.target.id)}>Add Favorite</button>
          <div>
            <h3>Plot</h3>
            <p>{props.movie.Plot}</p>  
        </div>
        <div>
            <h3>Directed By</h3>
            <p>{props.movie.Director}</p>    
        </div>
        <div>
            <h3>Production</h3>
            <p>{props.movie.Production}</p>    
        </div>
        <div>
            <h3>Starring</h3>
            <ul>
      {props.movie.Actors.split(' ').map((item,i) => 
        <li key={i}>{item}</li>
      )}
      </ul>
        </div>
        </div> 
    </section>
    )
}


export default MovieShowPage;

