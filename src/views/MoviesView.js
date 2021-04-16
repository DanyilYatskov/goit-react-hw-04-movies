import React, { Component } from 'react';
import fetchAPI from '../Services/fetchAPI';
//import BigTitle from '../components/BigTitle';
import Loader from '../components/Loader';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';

class MoviesView extends Component {
  state = {
    movies: [],
    searchQuery: '',
    showLoader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchMovies();
      //console.log(this.movies);
    }
  }

  onNewSearch = ({ query }) => {
    fetchAPI.resetPageToFirst();
    this.setState({
      searchQuery: query,
      movies: [],
      showLoader: false,
    });
  };

  searchMovies = () => {
    this.setState({ showLoader: true });
    const { searchQuery } = this.state;
    const { location } = this.props;
    fetchAPI.movieName = searchQuery;
    if (location.state && location.state.from) {
      fetchAPI.movieName = location.state.from.params;
    }
    // if (location.params) {
    //   fetchAPI.movieName = location.params;
    //   console.log('locparams', location.params);
    // }
    location.params = searchQuery;
    console.log('fetchAPI.movieName:', fetchAPI.movieName);
    fetchAPI
      .searchMoviesbyTag()
      .then(({ results }) => {
        if (results.length === 0) {
          return;
        }
        this.setState({ movies: results });
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ showLoader: false }));
  };

  render() {
    const { showLoader, movies } = this.state;
    return (
      <>
        <SearchForm onSearchMovieByQuery={this.onNewSearch} />
        {showLoader && <Loader />}
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesView;
