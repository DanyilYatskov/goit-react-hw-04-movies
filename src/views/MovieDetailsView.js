import { React, Component } from 'react';
import fetchAPI from '../Services/fetchAPI';
import MovieInfo from '../components/MovieInfo';
import routes from '../routes';
import handleNoImage from '../Services/handleNoImage';

class MovieDetailsView extends Component {
  state = {
    movie: {},
    query: '',
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    location.params = location.state.from.params;
    console.log('location.params-', location.params);
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.moviesPage);
  };

  async componentDidMount() {
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
