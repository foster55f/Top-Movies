import './MovieCard.css';
import React, { useEffect, useRef, useCallback} from "react";
import { withRouter } from 'react-router-dom';
import Heart from '../HeartCheckbox/HeartCheckBox';



const MovieCard = ({ id, Title, Poster, character, focus, index, setFocus, history, isAFavorite, containernumber, containerFocus }) => {
  const ref = useRef(null);
  
  
  useEffect(() => {
      if (containerFocus.upDown===containernumber && focus ) {
      ref.current.focus();
    }
  }, [focus, containerFocus]);


  const handleSelect = useCallback(() => {
    history.push(`/movies/${Title}`)
    // setFocus(index);
  }, [character, index, setFocus]);


  return (
    <div >
      <button className='movie-card' tabIndex="0"
        id={id} 
        containernumber={containernumber}
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



