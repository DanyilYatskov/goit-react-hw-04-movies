import React from 'react';
//import PropTypes from 'prop-types';
import Navigation from './Navigation';
import styles from './appBar.module.scss';

const AppBar = () => {
  return (
    <header className={styles.appBar}>
      <Navigation />
    </header>
  );
};

export default AppBar;
