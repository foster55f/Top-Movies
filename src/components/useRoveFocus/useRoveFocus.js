import { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { lastFocus } from '../../reducers/lastFocus';



const useRoveFocus = (size) => {
  const { favoriteMovies, lastFocus } = useSelector(state => state);
console.log(lastFocus.leftRight)  
const [currentFocus, setCurrentFocus] = useState({
    'leftRight': lastFocus.leftRight,
    'upDown': lastFocus.upDown,     
  });


  const handleKeyDown = useCallback(
    e => {
      let rightArrow = 39;
      let lefttArrow = 37;
      let downArrow = 40;
      let upArrow = 38;
      if (e.keyCode === rightArrow) {
        e.preventDefault();
        if (currentFocus.leftRight === size - 1) {
          setCurrentFocus({...currentFocus, leftRight:0})
        } else {
          setCurrentFocus({...currentFocus, leftRight: currentFocus.leftRight+1})
        }
      } else if (e.keyCode === lefttArrow) {
        e.preventDefault();
        if (currentFocus.leftRight === 0 )  {
          setCurrentFocus({...currentFocus, leftRight:size-1})
        } else {
          setCurrentFocus({...currentFocus, leftRight: currentFocus.leftRight-1})
        }
      } else if (e.keyCode === downArrow) {
        e.preventDefault();
        if(favoriteMovies.length > 0 && currentFocus.upDown===6 || favoriteMovies.length === 0 && currentFocus.upDown === 5 ) {
          setCurrentFocus({leftRight:0, upDown:0},)
        } else {
          setCurrentFocus({leftRight:0, upDown: currentFocus.upDown+1})
        }
      }else if (e.keyCode === upArrow) {
        e.preventDefault();
        if (currentFocus.upDown === 0 && favoriteMovies.length === 0) {
          setCurrentFocus({leftRight: 0, upDown: 5})
       } else if (currentFocus.upDown === 0 && favoriteMovies.length > 0) {
          setCurrentFocus({leftRight: 0, upDown: 6})
       } else {
          setCurrentFocus({leftRight:0, upDown: currentFocus.upDown-1})
        }
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
}

export default useRoveFocus;