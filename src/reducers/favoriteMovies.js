export const favoriteMovies = (state = [], action) => {
    switch (action.type) {
        case 'FAVORITE_MOVIES':
            return [...state, action.favoriteGames]
        case 'REMOVE_MOVIES':
                state.splice(state.indexOf(action.favoriteMovies), 1 );
            return [...state]
        default:
            return state
    }
}