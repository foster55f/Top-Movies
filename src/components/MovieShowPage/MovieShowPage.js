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
        <button className='favorite-button'>Add Favorite</button>
      <div className='movie-info-container'>
        <div className='movie-poster' style={{backgroundImage: `url(${this.props.movie.Poster})`}}/>
        <div className='movie-info-text'>
          <h2>{this.props.movie.Title.toUpperCase()}</h2>
          <p>OVERVIEW: {this.props.movie.overview}</p>
          <p>RELEASE DATE: {this.state.date}</p>
          {/* <p>AVERAGE RATING: {Math.round(this.props.movie.average_rating)}</p> */}
            <p>YOUR RATING: {this.state.movieRating}</p> :
            <button className='rate-button' onClick={this.show}>RATE THIS MOVIE</button> :
            <Link to='/login'>
              <button className='login-button'>LOG IN NOW TO RATE THIS MOVIE</button>
            </Link>}
        </div>
      </div>
    </section>
    )
  }
}



export default MovieShowPage;

