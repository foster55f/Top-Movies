import { combineReducers } from 'redux';
import { movies } from './movies';
import { id } from './id';



const rootReducer = combineReducers({
  movies, id
});


export default rootReducer;