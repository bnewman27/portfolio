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
          <p className={classes.skillsText}>HTML</p>
          <p className={classes.skillsText}>CSS</p>
          <p className={classes.skillsText}>Javascript</p>
          <p className={classes.skillsText}>SQL</p>
          <p className={classes.skillsText}>Python</p>
          <p className={classes.skillsText}>HTML</p>
          <p className={classes.skillsText}>TypeScript</p>
          <p className={classes.skillsText}>Sass</p>
        </div>
        <div className={styles.box}>
          <h3 className={classes.skillsHeaders}>Tools</h3>
          <p className={classes.skillsText}>MongoDB</p>
          <p className={classes.skillsText}>PostgreSQL</p>
          <p className={classes.skillsText}>GitHub</p>
          <p className={classes.skillsText}>Terminal</p>
          <p className={classes.skillsText}>VSCode</p>
          <p className={classes.skillsText}>Replit</p>
          <p className={classes.skillsText}>React</p>
        </div>
        <div className={styles.box}>
          <h3 className={classes.skillsHeaders}>Expertise</h3>
          <p className={classes.skillsText}>Content Creation</p>
          <p className={classes.skillsText}>Management</p>
          <p className={classes.skillsText}>Brand Development</p>
          <p className={classes.skillsText}>Networking</p>
          <p className={classes.skillsText}>Social Media</p>
          <p className={classes.skillsText}>Sound Design</p>
          <p className={classes.skillsText}>Live Audio Mixing</p>
          <p className={classes.skillsText}>Soundtracking</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;