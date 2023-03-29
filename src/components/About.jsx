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
          <p className={classes.aboutMeText}>
            I recently completed a Software Development bootcamp at California State University, Long Beach. Through this experience, I developed a passion for full-stack web development and have been working on personal projects to continue improving my skills.
          </p>
        </div>
        <div className={styles.box}>
          <p className={classes.aboutMeText}>
            In my free time, I enjoy traveling and exploring new cultures. I find that immersing myself in different environments, meeting new people, and trying new activities helps me to think more creatively and approach problems from fresh perspectives.
          </p>
        </div>
        <div className={styles.box}>
          <p className={classes.aboutMeText}>
            I am extremely passionate about the potential for blockchain and artificial intelligence to revolutionize industries and solve global challenges. I am excited to continue expanding my knowledge in this field and use my skills to make a positive impact on the world.
          </p>
        </div>
      </div>
    </div>
  );
};





export default About;


