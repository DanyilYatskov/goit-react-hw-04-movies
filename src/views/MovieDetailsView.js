import { React, Component } from 'react';
import getFullMovieInfo from '../Services/getFullMovieInfo';
import MovieInfo from '../components/MovieInfo';
import AdditionalMovieInfo from '../components/AdditionalMovieInfo';
import routes from '../routes';

class MovieDetailsView extends Component {
  state = {
    movie: {},
    query: '',
    goBackPage: {},
  };

  handleGoBack = () => {
    const { history } = this.props;
    if (this.state.goBackPage) {
      return history.push(this.state.goBackPage.from);
    }
    history.push(routes.homePage);
  };

  async componentDidMount() {
    this.setState({ goBackPage: this.props.location.state });
    const { movieID } = this.props.match.params;
    const response = await getFullMovieInfo(movieID)
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
    const { movie, reviews } = this.state;
    return (
      <>
        <MovieInfo
          movie={movie}
          handleGoBack={this.handleGoBack}
          reviews={reviews}
        />
        <AdditionalMovieInfo />
      </>
    );
  }
}

export default MovieDetailsView;
