import React from 'react';
import './MovieCard.css';
import { useDispatch } from 'react-redux';
import { addId } from '../../actioncreators';



export const MovieCard = ({id, Poster }) => {
  const dispatch = useDispatch()
  const findId = (event) => {
    console.log(event)
    dispatch(addId(event))
  }


  return (
    <div className='movie-card' id={id} onClick={event => findId(event.target.id)} tabIndex="0">
      <div id={id} className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />
    </div>
  )
}



export default MovieCard;