import React, { useRef, useEffect} from 'react';
import './MovieCard.css';
import { useDispatch } from 'react-redux';
import { addId } from '../../actioncreators';
import useFocusOnKeyDown from 'react-focus-onkeydown';




export const MovieCard = ({ id, Poster }) => {
  const dispatch = useDispatch()
  const ref = useRef(null);
 
  console.log(ref)
  
  useFocusOnKeyDown(ref);

  const findId = (event) => {
    dispatch(addId(event))
  }





  return (
    <button className='movie-card' tabIndex="0" id={id} onClick={event => findId(event.target.id)} ref={ref} >
      <div id={id} className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />
    </button>
  )
}



export default MovieCard;