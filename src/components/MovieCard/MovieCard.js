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


  const handleKeyPress = useCallback((event) => {
    if(event.key === 'Enter'){
      history.push(`/movies/${Title}`)
    }
  }, [character, index, setFocus]);


  return (
    <div >
      <button className='movie-card' tabIndex="0"
        id={id} 
        containernumber={containernumber}
        tabIndex={focus ? 0 : -1}
        role="button"
        ref={ref}
        onKeyPress={handleKeyPress}
      >
        <div id={id} className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />        
      </button>
      <Heart checked={isAFavorite}   />      
    </div>
  )
}


export default (withRouter(MovieCard))



