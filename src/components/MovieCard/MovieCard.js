import './MovieCard.css';
import useFocusOnKeyDown from 'react-focus-onkeydown';
import React, { useEffect, useRef, useCallback} from "react";
import { withRouter } from 'react-router-dom';
import Heart from '../HeartCheckbox/HeartCheckBox';



const MovieCard = ({ id, Title, Poster, character, focus, index, setFocus, history, isAFavorite, containerNumber, containerFocus }) => {
  const ref = useRef(null);
  
  
  // useFocusOnKeyDown(ref);

  useEffect(() => {
      if (containerFocus.upDown===containerNumber && focus ) {
      // Move element into view when it is focused
      ref.current.focus();
    }
  }, [focus, containerFocus]);


  const handleSelect = useCallback(() => {
    history.push(`/movies/${Title}`)
    // setting focus to that element when it is selected
    setFocus(index);
  }, [character, index, setFocus]);


  return (
    <div >
      <button className='movie-card' tabIndex="0"
        id={id} 
        containerNumber={containerNumber}
        tabIndex={focus ? 0 : -1}
        role="button"
        ref={ref}
        onClick={handleSelect}
        onKeyPress={handleSelect}
      >
        <div id={id} className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />        
      </button>
      <Heart checked={isAFavorite}   />      
    </div>
  )
}


export default (withRouter(MovieCard))



