import { retrieveMovies } from '../../fetchcalls'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../actioncreators';
import './App.css';
import MovieContainer2019 from '../../containers/MovieContainer2019/MovieContainer2019';
import MovieContainer2018 from '../../containers/MovieContainer2018/MovieContainer2018';
import ActionContainer from '../../containers/ActionContainer/ActionContainer';
import MysteryDramaContainer from '../../containers/MysteryDramaContainer/MysteryDramaContainer';
import ThrillerContainer from '../../containers/ThrillerContainer/ThrillerContainer';
import FantasyContainer from '../../containers/FantasyContainer/FantasyContainer';



const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    document.addEventListener("keydown", _handleKeyDown);
    retrieveMovies('http://localhost:4000/api/movies')
      .then(movies => {
        dispatch(addMovies(movies))
    })
  }, []);

 const leftArrowPressed = ()=> {
  console.log("left")
    
 }
 
 const rightArrowPressed = () => {
    console.log("right")
 }
  
 const downArrowPressed = () => {
  console.log("down")
 }

 const upArrowPressed = () => {
  console.log("up")
}
 
 const _handleKeyDown = (evt) => {
     evt = evt || window.event;
     switch (evt.keyCode) {
         case 37:
             leftArrowPressed();
          break;
       
         case 38:
            upArrowPressed();
          break;
       
         case 39:
            rightArrowPressed();
          break;
       
         case 40:
            downArrowPressed();
          break;
     }
 };

  return (
    <>
    <div className='movies2019'>
      <MovieContainer2019 />
      </div>
      <div className='movies2018'>
      <MovieContainer2018 />
      </div>
      <div className='actionMovies'>
      <MysteryDramaContainer />
      </div>
      <div className='actionMovies'>
      <ActionContainer />
      </div>
      <div className='actionMovies'>
      <FantasyContainer />
      </div>
      <div className='actionMovies'>
      <ThrillerContainer />
    </div>
    </>
  );
}

export default App;
