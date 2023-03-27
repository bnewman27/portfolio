import React, { useState, useEffect } from 'react';
import styles from '../styles/Contact.module.scss';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneSquareAlt } from 'react-icons/fa';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={`${styles['container']} ${isLoaded ? styles.visible : ''}`}>
      <div className={styles['contact-info']}>
        <a href="tel:+13306065612" className={styles['contact-link']}>
          <FaPhoneSquareAlt className={styles['contact-icon']} />
          (330) 606-5612
        </a>
        <a href="mailto:bendmcintyre@gmail.com" className={styles['contact-link']}>
          <FaEnvelope className={styles['contact-icon']} />
          bendmcintyre@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/ben-mcintyre-profile/" target="_blank" rel="noopener noreferrer" className={styles['contact-link']}>
          <FaLinkedin className={styles['contact-icon']} />
          LinkedIn
        </a>
        <a href="https://github.com/bendmcintyre?tab=repositories" target="_blank" rel="noopener noreferrer" className={styles['contact-link']}>
          <FaGithub className={styles['contact-icon']} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
