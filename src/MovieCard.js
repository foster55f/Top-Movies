import React from 'react';
import './MovieCard.css';

export const MovieCard = ({ Title,Year,Rated,Released,Runtime,Genre,Director,Writers,
  Actors,
  Plot,
  Language,
  Country,
  Awards,
  Poster }) => {

console.log(Title)
  return (
    <article className='movie-card'>
      <h2>{Title}</h2>
      <div className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />
      <p>YOUR RATING: 5</p> :
        <p></p>
    </article>
  )
}



export default MovieCard;