import React, { Component } from 'react';
import fetchAPI from '../../Services/fetchAPI';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;
    const cast = await fetchAPI.getMovieCast(movieID);
    if (cast) {
      this.setState({ cast: cast.results });
    }
  }

  render() {
    return;
    <ul>
      {reviews.length === 0 && (
        <BigTitle title=" There are no reviews for this movie" />
      )}
    </ul>;
  }
}
