import { combineReducers } from 'redux';
import { movies } from './movies';
import { favoriteMovies } from './favoriteMovies';




const rootReducer = combineReducers({
  movies, favoriteMovies
});


export default rootReducer;