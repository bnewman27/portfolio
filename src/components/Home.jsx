import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
      <div
        class="welcomeRainbow"
      >
        <h1 className={styles['header']}>
          Welcome
        </h1>
      </div>
  );
};

export default Home;

