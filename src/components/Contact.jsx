import React, { useState, useEffect } from 'react';
import styles from '../styles/Contact.module.scss';
import classes from '../styles/Contact.module.scss';
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
      <form>
        <div className={styles['form-item']}>
          <label htmlFor="name" className={styles['form-label']}>Name:</label>
          <br />
          <input className={styles['form-text']} type="text" id="name" name="name" required maxLength="40" pattern="[A-Za-z ]+" />
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="email" className={styles['form-label']}>Email:</label>
          <br />
          <input className={styles['form-text']} type="email" id="email" name="email" required />
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="subject" className={styles['form-label']}>Subject:</label>
          <br />
          <input className={styles['form-text']} type="text" id="subject" name="subject" required maxLength="50" />
        </div>
        <div className={styles['form-item']}>
          <label htmlFor="message" className={styles['form-label']}>Message:</label>
          <br />
          <textarea className={`${styles['form-text']}, ${classes['message-input-box']}`} id="message" name="message" required maxLength="500"></textarea>
        </div>
        <button type="submit" className={styles['submit-button']}>Submit</button>
      </form>
      <div className={styles['contact-info']}>
        <a href="tel:+12096143675" className={styles['contact-link']}>
          <FaPhoneSquareAlt className={styles['contact-icon']} />
          (209) 614-3675
        </a>
        <a href="mailto:ben.newman5277@gmail.com" className={styles['contact-link']}>
          <FaEnvelope className={styles['contact-icon']} />
          ben.newman5277@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/ben-newman-50a818182/" target="_blank" rel="noopener noreferrer" className={styles['contact-link']}>
          <FaLinkedin className={styles['contact-icon']} />
          LinkedIn
        </a>
        <a href="https://github.com/bnewman27" target="_blank" rel="noopener noreferrer" className={styles['contact-link']}>
          <FaGithub className={styles['contact-icon']} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
