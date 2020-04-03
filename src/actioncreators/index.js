export const addMovies = movies => ({
    type: 'ADD_MOVIES',
    movies
});
  
export const addId = id => ({
  type: 'FIND_ID',
  id
});

export const addFavoriteMovies = favoriteMovies => ({
  type: 'FAVORITE_MOVIES',
  favoriteMovies
})

export const removeFavoriteMovies = favoriteMovies => ({
  type: 'REMOVE_MOVIES',
  favoriteMovies
})