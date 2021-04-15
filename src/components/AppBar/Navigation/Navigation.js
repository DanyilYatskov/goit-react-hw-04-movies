import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import fetchAPI from '../../../API/fetchAPI';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        exact
        to={routes.homePage}
        className={styles.navLink}
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.moviesPage}
        className={styles.navLink}
        activeClassName="active"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
