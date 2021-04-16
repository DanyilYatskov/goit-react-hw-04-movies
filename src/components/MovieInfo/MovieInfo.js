import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import handleNoImage from '../../Services/handleNoImage';
import styles from './movieInfo.module.scss';

const MovieInfo = ({ movie, handleGoBack }) => {
  const src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  const btnText = '<-Go back';
  console.log(movie);
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
    </>
  );
};

export default withRouter(MovieInfo);

MovieInfo.propTypes = {
  //   movie: PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     vote_average: PropTypes.number.isRequired,
  //     overview: PropTypes.string.isRequired,
  //     genres: PropTypes.string.isRequired,
  //   }),
  movie: PropTypes.object.isRequired,
};
