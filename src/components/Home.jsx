import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
      <div
        className={`${styles['container']} ${
          isLoaded ? styles.visible : ''
        }`}
      >
        <h1 className={styles['header']}>
          Welcome
        </h1>
        <h1 className={styles['header']}>
          Home
        </h1>
        <h1 className={styles['header']}>
          Home
        </h1>
        <h1 className={styles['header']}>
          Home
        </h1>
        <h1 className={styles['header']}>
          Home
        </h1>
        <h1 className={styles['header']}>
          Home
        </h1>
        <h1 className={styles['header']}>
          Home
        </h1>
        <h1 className={styles['header']}>
          Home
        </h1>
        <h1 className={styles['header']}>
          Home
        </h1>
        <h1 className={styles['header']}>
          Home
        </h1>
      </div>
  );
};

export default Home;

