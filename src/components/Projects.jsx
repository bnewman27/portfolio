import React, { useState, useEffect } from 'react';
import styles from '../styles/Projects.module.scss';
import classes from '../styles/Projects.module.scss';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`${styles['container']} ${isLoaded ? styles.visible : ''}`}>
      <div className={classes['projects-container']}>
        <div className={classes['project-box']}>
          <a href="https://bendmcintyre.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer">
            <div className={classes['project-image']} style={{ backgroundImage: '../images/tic-tac-toe.jpeg' }}></div>
          </a>
        </div>
        <div className={classes['project-box']}>
          <a href="https://www.project2.com" target="_blank" rel="noopener noreferrer">
            <div className={classes['project-image']} style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52617.jpg)' }}></div>
          </a>
        </div>
        <div className={classes['project-box']}>
          <a href="https://www.project3.com" target="_blank" rel="noopener noreferrer">
            <div className={classes['project-image']} style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52617.jpg)' }}></div>
          </a>
        </div>
      </div>
      <div className={classes['projects-container-description']}>
        <div className={`${classes['project-box-description']} ${classes['project-box-white-bg']}`}>
          <div className={classes['project-text-description']}>
            <h3>Tic-Tac-Toe</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Sass</p>
            <p>Typescript</p>
          </div>
        </div>
        <div className={`${classes['project-box-description']} ${classes['project-box-white-bg']}`}>
          <div className={classes['project-text-description']}>
            <h3>Inspection App</h3>
            <p>React</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>Bootstrap</p>
            <p>NPM</p>
            <p></p>
          </div>
        </div>
        <div className={`${classes['project-box-description']} ${classes['project-box-white-bg']}`}>
          <div className={classes['project-text-description']}>
            <h3>Inspection App</h3>
            <p>React</p>
            <p>Sass</p>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>NPM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;




