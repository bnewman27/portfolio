import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      <nav
        className={`${styles.nav} ${
          isLoaded ? styles.show : ''
        }`}
      >
        <div className={styles.navContainer}>
          <Link to="/" className={styles.navLink}>
            <button className={styles.navButton}>
              <p>Home</p>
            </button>
          </Link>
          <Link to="/about" className={styles.navLink}>
            <button className={styles.navButton}>
              <p>About</p>
            </button>
          </Link>
          <Link to="/projects" className={styles.navLink}>
            <button className={styles.navButton}>
              <p>Projects</p>
            </button>
          </Link>
          <Link to="/contact" className={styles.navLink}>
            <button className={styles.navButton}>
              <p>Contact</p>
            </button>
          </Link>
        </div>
      </nav>
      <div
        className={`${styles['home-container']} ${
          isLoaded ? styles.visible : ''
        }`}
      >
        <h1 className={styles['home-header']}>
          Home Page
        </h1>
      </div>
    </>
  );
};

export default Home;

