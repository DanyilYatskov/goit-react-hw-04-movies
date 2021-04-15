import React, { Component } from 'react';
import fetchAPI from '../Services/fetchAPI';
import BigTitle from '../components/BigTitle';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';

class MoviesView extends Component {
  state = {
    movies: [],
  };
  render() {
    return (
      <>
        <SearchForm />
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesView;
