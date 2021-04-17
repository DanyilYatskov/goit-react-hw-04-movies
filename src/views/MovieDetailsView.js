import { React, Component } from 'react';
import fetchAPI from '../Services/fetchAPI';
import MovieInfo from '../components/MovieInfo';
//import MovieReviews from '../components/MovieReviews';
import routes from '../routes';

class MovieDetailsView extends Component {
  state = {
    movie: {},
    query: '',
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      location.params = location.state.from.params;
      return history.push(location.state.from);
    }
    history.push(routes.homePage);
  };

  async componentDidMount() {
    console.log('MDview-', this.props);
    const { movieID } = this.props.match.params;
    const response = await fetchAPI
      .getFullMovieInfo(movieID)
      .then(response => {
        if (response !== undefined) {
          return {
            ...response,
            genres: response.genres.map(genre => genre.name).join(),
          };
        }
      })
      .catch(error => console.log(error));

    const cast = await fetchAPI.getMovieCast(movieID);
    if (response) {
      this.setState({ movie: response });
    }
    // const reviews = await fetchAPI.getMovieReviews(movieID);
    // if (reviews) {
    //   this.setState({ reviews: reviews.results });
    // }
  }

  render() {
    const { movie, reviews } = this.state;

    return (
      <MovieInfo
        movie={movie}
        handleGoBack={this.handleGoBack}
        reviews={reviews}
      />
    );
  }
}

export default MovieDetailsView;
