import React, { Component } from 'react';
import fetchAPI from '../Services/fetchAPI';
import MovieList from '../components/MovieList';
import BigTitle from '../components/BigTitle';

class HomeView extends Component {
  state = {
    movies: [],
    error: false,
  };

  async componentDidMount() {
    const response = await fetchAPI
      .getTrendingMovies()
      .catch(() => this.setState({ error: true }));
    if (response) {
      this.setState({ movies: response.results, error: false });
    }
  }

  render() {
    const { movies, error } = this.state;
    return (
      <>
        {error && (
          <BigTitle title="Server error press F5 to  reload the page" />
        )}
        <BigTitle title="Trending Today" />
        <MovieList movies={movies} />
      </>
    );
  }
}

export default HomeView;
