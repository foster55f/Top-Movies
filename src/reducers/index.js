import { combineReducers } from 'redux';
import { movies } from './movies';
import { favoriteMovies } from './favoriteMovies';
import { lastFocus } from './lastFocus';


const rootReducer = combineReducers({
  movies, favoriteMovies, lastFocus
});


export default rootReducer;