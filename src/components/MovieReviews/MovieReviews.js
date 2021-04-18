import React, { Component } from 'react';
import fetchAPI from '../../Services/fetchAPI';
//import { withRouter } from 'react-router-dom';
import BigTitle from '../BigTitle';
import Loader from '../Loader';

class MovieReviews extends Component {
  state = {
    reviews: [],
    loader: false,
    error: false,
  };

  async componentDidMount() {
    this.setState({ loader: true, error: false });
    //console.log('review props-', this.props);
    const { movieID } = this.props.match.params;
    const reviews = await fetchAPI
      .getMovieReviews(movieID)
      .then(({ results }) => {
        if (results.length === 0) {
          this.setState({ error: true });
        }
        return results;
      })
      .catch(e => this.setState({ error: true }))
      .finally(() => this.setState({ loader: false }));
    if (reviews) {
      this.setState({ reviews: reviews });
    }
  }

  render() {
    const { reviews, loader, error } = this.state;
    return (
      <ul>
        {error && <BigTitle title=" There are no reviews for this movie" />}
        {loader && <Loader />}
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MovieReviews;
