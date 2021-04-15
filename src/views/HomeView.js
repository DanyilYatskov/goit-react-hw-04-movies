import React, { Component } from 'react';
import fetchAPI from '../Services/fetchAPI';
import MovieList from '../components/MovieList';
import BigTitle from '../components/BigTitle';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await fetchAPI.getTrendingMovies();
    this.setState({ movies: response.results });
  }

  render() {
    return (
      <>
        <BigTitle title="Trending Today" />
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default HomeView;
