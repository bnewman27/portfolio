import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.scss';
import classes from '../styles/About.module.scss';


const About = () => {
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
          <h3 className={classes.aboutHeaders}>
            Education
          </h3>
          <p className={classes.aboutMeText}>
            Since completing a Software Development bootcamp at California State University, Long Beach, I have been working on personal projects to continue improving my full-stack web development skills. Additionally, I have worked with Codecademy to further hone my coding abilities.          </p>
        </div>
        <div className={styles.box}>
          <h3 className={classes.aboutHeaders}>
            About Me
          </h3>
          <p className={classes.aboutMeText}>
            My free time is typically spent exploring new cultures and traveling. Immersing myself in unfamiliar environments and meeting new people helps me approach problems from fresh perspectives and stimulates my creativity. I'm also a big fan of spending time with my French bulldog, Chungus!          </p>
        </div>
        <div className={styles.box}>
          <h3 className={classes.aboutHeaders}>
            Passions
          </h3>
          <p className={classes.aboutMeText}>
            I am extremely passionate and driven about the potential for blockchain and artificial intelligence to revolutionize industries and solve global challenges. I am excited to continue expanding my knowledge in this rapidly-evolving field and use my skills to make a meaningful and positive impact on the world.          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
