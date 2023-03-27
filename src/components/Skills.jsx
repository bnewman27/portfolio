import React, { useState, useEffect } from 'react';
import styles from '../styles/Skills.module.scss';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`${styles['container']} ${isLoaded ? styles.visible : ''}`}>
      <h1 className={styles['header']}>
          Skills
        </h1>
    </div>
  );
};

export default Contact;