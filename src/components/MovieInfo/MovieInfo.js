import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import handleNoImage from '../../Services/handleNoImage';
import styles from './movieInfo.module.scss';

const MovieInfo = ({ movie, handleGoBack }) => {
  const btnText = '<-Go back';
  return (
    <>
      <button className={styles.button} type="button" onClick={handleGoBack}>
        {btnText}
      </button>
      <div className={styles.movieCard}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : 'https://i.pinimg.com/564x/12/61/84/126184dfb0f0c766bfd35206dae35b37.jpg'
          }
          alt="It seems the poster is missing"
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
  handleGoBack: PropTypes.func.isRequired,
};
