import { retrieveMovies } from '../../fetchcalls';
import { Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies } from '../../actioncreators';
import './App.css';
import MovieContainer2019 from '../../containers/MovieContainer2019/MovieContainer2019';
import MovieContainer2018 from '../../containers/MovieContainer2018/MovieContainer2018';
import ActionContainer from '../../containers/ActionContainer/ActionContainer';
import MysteryDramaContainer from '../../containers/MysteryDramaContainer/MysteryDramaContainer';
import ThrillerContainer from '../../containers/ThrillerContainer/ThrillerContainer';
import FantasyContainer from '../../containers/FantasyContainer/FantasyContainer';
import FavoritesContainer from '../../containers/FavoritesContainer/FavoritesContainer';
import MovieShowPage from '../MovieShowPage/MovieShowPage';


const App = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(state => state);
  const { favoriteMovies } = useSelector(state => state);


  useEffect(() => {
    retrieveMovies('http://localhost:4000/api/movies')
      .then(movies => {
        dispatch(addMovies(movies))
    })
  }, []);

  
  return (
    <>
    <Route
    exact path="/"
    render={() => {
      return (
        <>
          <div className='header'>
              <h1>Top Movies 2019</h1>
          </div>
          <div className='movies'>
              <MovieContainer2019 />
          </div>
          <div className='header'>
              <h1>Top Movies 2018</h1>
          </div>
          <div className='movies'>
              <MovieContainer2018 />
          </div>
          <div className='header'>
              <h1>Mystery/Drama</h1>
          </div>
          <div className='movies'>
              <MysteryDramaContainer />
          </div>
          <div className='header'>
              <h1>Action</h1>
          </div>
          <div className='movies'>
              <ActionContainer />
          </div>
          <div className='header'>
              <h1>Fantasy</h1>
          </div>
          <div className='movies'>
              <FantasyContainer />
          </div>
          <div className='header'>
              <h1>Thriller</h1>
          </div>
          <div className='movies'>
              <ThrillerContainer />
          </div>
          {favoriteMovies.length > 0 &&
            <>
          <div className='header'>
              <h1>Your Favorites</h1>
          </div>
            <div className='movies'>
              <FavoritesContainer />
            </div> 
            </>
          }
        </> 
      )
    }}
  />  
      {movies && <Route
        exact path="/movies/:movie" render={({ match }) => {
          let movie = movies.find(movie => movie.Title === match.params.movie)
          return movie &&
            <>
              <MovieShowPage movie={movie} />
            </>
        }} />
      }
    </>
  );
}

export default App;


