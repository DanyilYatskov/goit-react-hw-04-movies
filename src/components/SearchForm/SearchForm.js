import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './searchForm.module.scss';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    const { location, history } = this.props;
    this.setState({ [name.toLowerCase()]: value });
    history.push({
      ...location,
      search: `?query=${value}`,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearchMovieByQuery(this.state);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies by name"
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default withRouter(SearchForm);
