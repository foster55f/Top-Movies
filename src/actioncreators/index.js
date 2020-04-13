export const addMovies = movies => ({
    type: 'ADD_MOVIES',
    movies
});
  
export const addFavoriteMovies = favoriteMovies => ({
  type: 'FAVORITE_MOVIES',
  favoriteMovies
})

export const removeFavoriteMovies = favoriteMovies => ({
  type: 'REMOVE_MOVIES',
  favoriteMovies
})

export const rememberLastFocus = (leftRight, upDown) => ({
  type: 'REMEMBER_FOCUS',
  leftRight,
  upDown
})