export const favoriteMovies = (state = [], action) => {
    switch (action.type) {
        case 'FAVORITE_MOVIES':
            return [...state, action.favoriteMovies]
        case 'REMOVE_MOVIES':
                state.splice(state.indexOf(action.favoriteMovies), 1 );
            return [...state]
        default:
            return state
    }
}