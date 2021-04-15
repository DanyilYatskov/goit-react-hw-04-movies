import PropTypes from 'prop-types';
import styles from './bigTitle.module.scss';

const BigTitle = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default BigTitle;

BigTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
