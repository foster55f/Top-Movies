import { retrieveMovies } from '../fetchcalls'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovies } from '../actioncreators';
import './App.css';
import MovieContainer from '../containers/MovieContainer';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    retrieveMovies('http://localhost:4000/api/movies')
      .then(movies => {
        dispatch(addMovies(movies))
    })
  }, []);
  
  function handleClick(){
    console.log('hello')
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>You clicked times</button>
      <MovieContainer />
    </div>
  );
}

export default App;
