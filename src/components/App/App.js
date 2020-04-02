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
  const dispatch = useDispatch();
  

  useEffect(() => {
    retrieveMovies('http://localhost:4000/api/movies')
      .then(movies => {
        dispatch(addMovies(movies))
    })
  }, []);

 
 


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


