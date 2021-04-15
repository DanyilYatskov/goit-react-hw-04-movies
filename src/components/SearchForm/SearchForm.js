import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import fetchAPI from '../../../API/fetchAPI';
import styles from './searchForm.module.scss';

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name.toLowerCase()]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onShowGalleryByQuery(this.state);
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
          placeholder="Search images and photos"
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchForm;
