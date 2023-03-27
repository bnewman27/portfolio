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
    <div className={`${styles.container} ${isLoaded ? styles.visible : ''}`}>
      <div className={styles.content}>
        <div className={styles.box}>
          <p>
            I recently completed a Software Development bootcamp at California State University, Long Beach. Through this experience, I developed a passion for full-stack web development and have been working on personal projects to continue improving my skills.
          </p>
        </div>
        <div className={styles.box}>
          <p>
            In my free time, I enjoy traveling and exploring new cultures. I find that immersing myself in different environments helps me to think more creatively and approach problems from new perspectives.
          </p>
        </div>
        <div className={styles.box}>
          <p>
            I have also worked on several projects in the blockchain space, helping to grow businesses and increase adoption of decentralized technologies. This has allowed me to gain valuable experience in a rapidly growing industry and stay up-to-date with the latest trends and developments.
          </p>
        </div>
        <div className={styles.box}>
          <p>
            I am passionate about the potential for artificial intelligence to revolutionize industries and solve some of the world's biggest challenges. I am excited to continue learning and growing in this field, and to use my skills to make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};





export default About;


