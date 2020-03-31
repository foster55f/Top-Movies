export const retrieveMovies = () => {
    return fetch('http://localhost:4000/api/movies')
    .then(response => {
        if (!response.ok) {
          throw Error('Error fetching games');
        }
        return response.json();
      })
}