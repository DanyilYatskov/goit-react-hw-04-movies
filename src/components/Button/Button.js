import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ name, type, handleOnClick }) => {
  return (
    <button className={styles.button} type={type} onClick={handleOnClick}>
      {name}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  handleOnClick: () => null,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
};
