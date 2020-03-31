import { retrieveMovies } from './fetchcalls'
import React, { useEffect } from 'react';

function App() {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    retrieveMovies('http://localhost:4000/api/movies')
      .then(data => {
      console.log(data)
    })
  },[]);

  return (
    <div>
      <p>You clicked times</p>
    </div>
  );
}

export default App;
