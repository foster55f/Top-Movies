import './MovieCard.css';
import { useDispatch } from 'react-redux';
import { addId } from '../../actioncreators';
import useFocusOnKeyDown from 'react-focus-onkeydown';
import React, { useEffect, useRef, useCallback } from "react";





const MovieCard = ({ id, Poster, character, focus, index, setFocus }) => {
  const dispatch = useDispatch()
  const ref = useRef(null);
  
  useFocusOnKeyDown(ref);

  useEffect(() => {
    if (focus) {
      // Move element into view when it is focused
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    alert(`${character}`);
    // setting focus to that element when it is selected
    setFocus(index);
  }, [character, index, setFocus]);


  const findId = (event) => {
    dispatch(addId(event))
  }

  return (
    <div>
      <button className='movie-card' tabIndex="0"
        id={id} onClick={event => findId(event.target.id)}
        tabIndex={focus ? 0 : -1}
        role="button"
        ref={ref}
        onClick={handleSelect}
        onKeyPress={handleSelect}
      >
      <div id={id} className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />
      </button>
    </div>
    
  )
}



export default MovieCard;



