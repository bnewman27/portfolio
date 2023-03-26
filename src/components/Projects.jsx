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
          <a href="https://www.project1.com" target="_blank" rel="noopener noreferrer">
            <div className={classes['project-image']}></div>
          </a>
        </div>
        <div className={classes['project-box']}>
          <a href="https://www.project2.com" target="_blank" rel="noopener noreferrer">
            <div className={classes['project-image']}></div>
          </a>
        </div>
        <div className={classes['project-box']}>
          <a href="https://www.project3.com" target="_blank" rel="noopener noreferrer">
            <div className={classes['project-image']}></div>
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
            <h3>Project</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;



