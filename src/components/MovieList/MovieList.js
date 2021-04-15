import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieListItem from './MovieListItem/';
import styles from './movieList.module.scss';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} location={location} />
      ))}
    </ul>
  );
};

export default withRouter(MovieList);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
