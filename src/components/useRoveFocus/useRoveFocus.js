import { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';



const useRoveFocus = (size, movieContainerState) => {
const { favoriteMovies } = useSelector(state => state);  
  const [currentFocus, setCurrentFocus] = useState({
    'leftRight': 0,
    'upDown': 0,     
  });


  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 39) {
        e.preventDefault();
        if (currentFocus === size - 1) {
          setCurrentFocus({...currentFocus, leftRight:0})
        } else {
          setCurrentFocus({...currentFocus, leftRight: currentFocus.leftRight+1})
        }
      } else if (e.keyCode === 37) {
        e.preventDefault();
        if (currentFocus === 0) {
          setCurrentFocus({...currentFocus, leftRight:size-1})
        } else {
          setCurrentFocus({...currentFocus, leftRight: currentFocus.leftRight-1})
        }
      } else if (e.keyCode === 40) {
        e.preventDefault();
        if(favoriteMovies.length > 0 && currentFocus.upDown===6 || favoriteMovies.length === 0 && currentFocus.upDown === 5 ) {
          setCurrentFocus({leftRight:0, upDown:0},)
        } else {
          setCurrentFocus({leftRight:0, upDown: currentFocus.upDown+1})
        }
      }else if (e.keyCode === 38) {
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