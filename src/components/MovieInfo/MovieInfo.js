import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import MovieReviews from '../MovieReviews';
import Cast from '../Cast';
import handleNoImage from '../../Services/handleNoImage';
import styles from './movieInfo.module.scss';

const MovieInfo = ({ movie, handleGoBack, match }) => {
  const src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  const btnText = '<-Go back';
  //console.log(match);
  return (
    <>
      <button className={styles.button} type="button" onClick={handleGoBack}>
        {btnText}
      </button>
      <div className={styles.movieCard}>
        <img
          src={src}
          alt="It seems the poster is missing"
          onError={handleNoImage}
          className={styles.poster}
        />
        <div className={styles.info}>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie.genres}</p>
        </div>
      </div>
      <p>Additional Information</p>
      <nav className={styles.navigation}>
        <NavLink
          exact
          to={`${match.url}/reviews`}
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          Reviews
        </NavLink>
        <NavLink
          to={`${match.url}/cast`}
          className={styles.navLink}
          activeClassName={styles.activeNavLink}
        >
          Cast
        </NavLink>
      </nav>
      <Route
        path={`${match.url}/reviews`}
        render={props => {
          console.log('renderoprops', props);
          return <MovieReviews match={match} />;
        }}
      ></Route>
      <Route
        path={`${match.url}/cast`}
        render={props => {
          console.log('renderoprops', props);
          return <Cast match={match} />;
        }}
      ></Route>
    </>
  );
};

export default withRouter(MovieInfo);

MovieInfo.propTypes = {
  // movie: PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   vote_average: PropTypes.number.isRequired,
  //   overview: PropTypes.string.isRequired,
  //   genres: PropTypes.string.isRequired,
  // }),
  movie: PropTypes.object.isRequired,
};
