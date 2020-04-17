export const retrieveMovies = (url) => {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
          throw Error('Error fetching games');
        }
        return response.json();
      })
}