import React, { Component } from 'react';
import getMovieReviews from '../../Services/getMovieReviews';
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
    const { movieID } = this.props.match.params;
    const reviews = await getMovieReviews(movieID)
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
