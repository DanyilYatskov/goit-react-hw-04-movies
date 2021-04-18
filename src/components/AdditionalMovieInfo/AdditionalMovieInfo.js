import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cast from '../Cast';
import MovieReviews from '../MovieReviews';
import styles from './additionalMovieInfo.module.scss';

const AdditionalMovieInfo = props => {
  return (
    <div>
      <h3>Additional Information</h3>
      <nav className={styles.navigation}>
        <NavLink
          exact
          to={`${props.match.url}/reviews`}
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          Reviews
        </NavLink>
        <NavLink
          to={`${props.match.url}/cast`}
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          Cast
        </NavLink>
      </nav>
      <Route
        path={`${props.match.url}/reviews`}
        render={() => {
          return <MovieReviews {...props} />;
        }}
      ></Route>
      <Route
        path={`${props.match.url}/cast`}
        render={() => {
          return <Cast {...props} />;
        }}
      ></Route>
    </div>
  );
};

export default withRouter(AdditionalMovieInfo);
