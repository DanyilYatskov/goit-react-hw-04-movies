import { React, Component } from 'react';
import fetchAPI from '../Services/fetchAPI';
import MovieInfo from '../components/MovieInfo';
import routes from '../routes';
import handleNoImage from '../Services/handleNoImage';

class MovieDetailsView extends Component {
  state = {
    movie: {},
  };

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.moviesPage);

    // history.push(location?.state?.from || routes.books);
  };

  async componentDidMount() {
    const { movieID } = this.props.match.params;
    console.log(movieID);
    const response = await fetchAPI.getFullMovieInfo(movieID).then(response => {
      if (response !== undefined) {
        return {
          ...response,
          genres: response.genres.map(genre => genre.name).join(),
        };
      }
    });
    console.log(response);
    if (response) {
      this.setState({ movie: response });
    }
  }

  render() {
    const { movie } = this.state;

    return <MovieInfo movie={movie} handleGoBack={this.handleGoBack} />;
  }
}

export default MovieDetailsView;
