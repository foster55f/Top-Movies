import React from 'react';
import './MovieCard.css';

export const MovieCard = ({id, Title, Poster }) => {
  
  const findId = (event)=> {
    console.log(event)
  }


  return (
    <div className='movie-card' id={id} onClick={event => findId(event.target.id)}>
      <h2 id={id}>{Title}</h2>
      <div id={id} className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />
    </div>
  )
}



export default MovieCard;