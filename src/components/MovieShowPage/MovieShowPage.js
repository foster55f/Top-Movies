import React from 'react';
import { Link } from 'react-router-dom';
// import RatingModal from '../RatingModal/RatingModal';
import { getRatings, postRating } from '../../fetchcalls';
// import { addRatings } from '../../actions';

import './MovieShowPage.css';



export class MovieShowPage extends React.Component {
constructor() {
  super()
  this.state = {
    show: false,
    currentRating: null,
    movieRating: null
  }
}


  show = () => {
    this.setState({show: !this.state.show})
  }

  addRating = (event) => {
    if (typeof parseInt(event.target.id) === 'number' && event.target.id.length > 0) {
      this.setState({currentRating: parseInt(event.target.id)})
    }
  }


  render() {
    return (
    <section className='movie-show-page'>
        <div className='movie-poster' style={{backgroundImage: `url(${this.props.movie.Poster})`}}/>
        <div>
        <h1>{this.props.movie.Title}</h1>
          <div className ='movie-details'>
            <h2>{this.props.movie.Genre}</h2>
            <h2>{this.props.movie.Year}</h2>
            <h2>{this.props.movie.Runtime}</h2>
            <h2>Rating: {this.props.movie.Rated}</h2>
          </div>
          <button>Add Favorite</button>
          <div>
            <h3>Plot</h3>
            <p>{this.props.movie.Plot}</p>  
        </div>
        <div>
            <h3>Directed By</h3>
            <p>{this.props.movie.Director}</p>    
        </div>
        <div>
            <h3>Production</h3>
            <p>{this.props.movie.Production}</p>    
        </div>
        <div>
            <h3>Starring</h3>
            <ul>
      {this.props.movie.Actors.split(' ').map((item,i) => 
        <li key={i}>{item}</li>
      )}
      </ul>
        </div>
        </div> 
    </section>
    )
  }
}



export default MovieShowPage;

