import React, { Component } from 'react';
import fetchAPI from '../../Services/fetchAPI';
import { withRouter } from 'react-router-dom';
import BigTitle from '../BigTitle';

class MovieReviews extends Component {
  state = {
    reviews: [],
    loader: false,
    error: false,
  };

  async componentDidMount() {
    console.log('review props-', this.props);
    const { movieID } = this.props.match.params;
    const reviews = await fetchAPI.getMovieReviews(movieID);
    if (reviews) {
      this.setState({ reviews: reviews.results });
    }
  }

  render() {
    const { reviews, loader, error } = this.state;
    return (
      <ul>
        {reviews.length === 0 && (
          <BigTitle title=" There are no reviews for this movie" />
        )}
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

// const MovieReviews = ({ reviews }) => {
//   return (
//     <ul>
//       {reviews.length === 0 && (
//         <BigTitle title=" There are no reviews for this movie" />
//       )}
//       {reviews.map(review => {
//         return (
//           <li key={review.id}>
//             <h4>{review.author}</h4>
//             <p>{review.content}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

export default MovieReviews;
