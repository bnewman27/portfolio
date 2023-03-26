import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/About.module.scss';

const About = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navLink}>
                        <button className={styles.navButton}>
                            <p>Home</p>
                        </button>
                    </Link>
                    <Link to="/about" className={styles.navLink}>
                        <button className={styles.navButton}>
                            <p>About</p>
                        </button>
                    </Link>
                    {/* Add other nav links as necessary */}
                </div>
            </nav>
            <div className={styles.aboutContainer}>
                <h1>About Page</h1>
                <p>This is the About page content. You can add more information about your website or application here.</p>
            </div>
        </>
    );
};

export default About;


