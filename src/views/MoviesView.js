import React, { Component } from 'react';
import fetchAPI from '../Services/fetchAPI';
//import BigTitle from '../components/BigTitle';
import Loader from '../components/Loader';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';
import BigTitle from '../components/BigTitle';

class MoviesView extends Component {
  state = {
    movies: [],
    searchQuery: '',
    showLoader: false,
  };

  componentDidMount() {
    const { location } = this.props;
    if (location && location.params) {
      this.setState({ searchQuery: location.params });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchMovies();
    }
  }

  onNewSearch = ({ query }) => {
    fetchAPI.resetPageToFirst();
    this.setState({
      searchQuery: query,
      movies: [],
      showLoader: false,
      error: false,
    });
  };

  searchMovies = () => {
    this.setState({ showLoader: true });
    const { searchQuery } = this.state;
    const { location } = this.props;
    fetchAPI.movieName = searchQuery;
    location.params = searchQuery;
    fetchAPI
      .searchMoviesbyTag()
      .then(({ results }) => {
        if (results.length > 0) {
          this.setState({ movies: results, error: false });
        }
      })
      .catch(error => this.setState({ error: true }))
      .finally(() => this.setState({ showLoader: false }));
  };

  render() {
    const { showLoader, movies, error } = this.state;
    return (
      <>
        <SearchForm onSearchMovieByQuery={this.onNewSearch} />
        {error && <BigTitle title="Server error , try again" />}
        {showLoader && <Loader />}
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesView;
