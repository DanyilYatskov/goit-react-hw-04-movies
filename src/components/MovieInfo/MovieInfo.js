import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import handleNoImage from '../../Services/handleNoImage';
import styles from './movieInfo.module.scss';

const MovieInfo = ({ movie, handleGoBack }) => {
  const src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  console.log(movie);
  return (
    <div>
      <button className={styles.button} type="button" onClick={handleGoBack}>
        Go Back
      </button>
      <div>
        <img
          src={src}
          alt="It seems the poster is missing"
          onError={handleNoImage}
          //className={styles.poster}
        />
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{movie.genres}</p>
      </div>
    </div>
  );
};

export default withRouter(MovieInfo);

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};
