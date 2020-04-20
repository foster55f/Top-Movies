import './MovieCard.css';
import React, { useEffect, useRef, useCallback} from "react";
import { withRouter } from 'react-router-dom';
import HeartCheckbox from 'react-heart-checkbox';
import { useDispatch } from 'react-redux';
import { rememberLastFocus } from '../../actioncreators';


const MovieCard = ({ id, Title, Poster, character, focus, index, setFocus, history, isAFavorite, containernumber, containerFocus }) => {
  const ref = useRef(null);
  const dispatch = useDispatch()
  
  useEffect(() => {
      if (containerFocus.upDown===containernumber && focus ) {
      ref.current.focus();
    }
  }, [focus, containerFocus]);


  const handleKeyPress = useCallback((event) => {
    dispatch(rememberLastFocus(parseInt(event.target.id[0]), parseInt(event.target.id[2])))
    if(event.key === 'Enter'){
      history.push(`/movies/${Title}`)
    }
  }, [character, index, setFocus]);

  return (
    <div >
      <button className='movie-card' tabIndex="0"
        id={[containerFocus.leftRight, containerFocus.upDown]} 
        containernumber={containernumber}
        tabIndex={focus ? 0 : -1}
        role="button"
        ref={ref}
        onKeyPress={handleKeyPress}
      >
        <div id={id} className='movie-img' style={{ backgroundImage: `url(${Poster})` }} />        
      </button>
      <div className ='heart-container'>
        {isAFavorite &&
            <HeartCheckbox checked={isAFavorite} />
        }
        </div>    
    </div>
  )
}


export default (withRouter(MovieCard))



