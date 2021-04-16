import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import handleNoImage from '../../../Services/handleNoImage';
import styles from './movieListItem.module.scss';

const MovieListItem = ({ movie, location }) => {
  const src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li key={movie.id} className={styles.item}>
      <Link
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: location },
        }}
      >
        <img
          src={src}
          alt="It seems the poster is missing"
          onError={handleNoImage}
          className={styles.poster}
        />
        <p className={styles.title}>{movie.title}</p>
        <p className={styles.info}>
          {movie.genre_ids} | {movie.release_date}
        </p>
      </Link>
    </li>
  );
};

export default withRouter(MovieListItem);

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
