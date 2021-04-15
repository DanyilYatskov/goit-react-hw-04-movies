import React from 'react';
import ReactLoader from 'react-loader-spinner';
import styles from './loader.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <ReactLoader
      className={styles.loader}
      type="TailSpin"
      color="#00BFFF"
      height={120}
      width={120}
      timeout={3000}
    />
  );
};

export default Loader;
