import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.scss';

const About = () => {
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
          About
        </h1>
      </div>
  );
};

export default About;


