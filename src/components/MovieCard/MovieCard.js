import './MovieCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addId } from '../../actioncreators';
import useFocusOnKeyDown from 'react-focus-onkeydown';
import React, { useEffect, useRef, useCallback} from "react";
import { withRouter } from 'react-router-dom';
import Demo from '../HeartCheckbox/HeartCheckBox';






const MovieCard = ({ id, Title, Poster, character, focus, index, setFocus, history, isAFavorite }) => {
  const dispatch = useDispatch()
  const ref = useRef(null);
  
  
  
  // useFocusOnKeyDown(ref);

  useEffect(() => {
    if (focus) {
      // Move element into view when it is focused
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    history.push(`/movies/${Title}`)
    // setting focus to that element when it is selected
    setFocus(index);
  }, [character, index, setFocus]);


  const findId = (event) => {
    dispatch(addId(event))
  }


  return (
    <div >
      <Demo checked={isAFavorite}   />
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


export default (withRouter(MovieCard))



