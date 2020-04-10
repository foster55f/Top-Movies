export const favoriteMovies = (state = [], action) => {
    switch (action.type) {
        case 'FAVORITE_MOVIES':
            return [...state, action.favoriteMovies]
        case 'REMOVE_MOVIES':
            let newState = [...state];
            newState.splice(newState.indexOf(action.favoriteMovies), 1 );
            return newState;
        default:
            return state
    }
}