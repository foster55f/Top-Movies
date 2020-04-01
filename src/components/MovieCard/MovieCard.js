import React from 'react';
import './MovieCard.css';

export const MovieCard = ({id, Poster }) => {
  
  const findId = (event)=> {
    console.log(event)
  }


  return (
    <div className='movie-card' id={id} onClick={event => findId(event.target.id)} >
      <div id={id} className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />
    </div>
  )
}



export default MovieCard;