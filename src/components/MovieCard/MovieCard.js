import React from 'react';
import './MovieCard.css';
import { useDispatch } from 'react-redux';
import { addId } from '../../actioncreators';



export const MovieCard = ({id, Poster, key }) => {
  const dispatch = useDispatch()
  const findId = (event) => {
    dispatch(addId(event))
  }


  return (
    <div className='movie-card' tabIndex={key} id={id} onClick={event => findId(event.target.id)} >
      <div id={id} className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />
    </div>
  )
}



export default MovieCard;