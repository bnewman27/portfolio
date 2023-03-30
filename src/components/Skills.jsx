import React, { useState, useEffect } from 'react';
import styles from '../styles/Skills.module.scss';
import classes from '../styles/Skills.module.scss';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`${styles.container} ${isLoaded ? styles.visible : ''}`}>
      <div className={styles.content}>
        <div className={styles.box}>
          <h3 className={classes.skillsHeaders}>Languages</h3>
          <p className={classes.skillsText}></p>
        </div>
        <div className={styles.box}>
          <h3 className={classes.skillsHeaders}>Expertise</h3>
          <p className={classes.skillsText}></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;