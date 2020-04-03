import { combineReducers } from 'redux';
import { movies } from './movies';
import { id } from './id';
import { favoriteMovies } from './favoriteMovies';




const rootReducer = combineReducers({
  movies, id, favoriteMovies
});


export default rootReducer;