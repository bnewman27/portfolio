import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.scss';

const Home = () => {
    useEffect(() => {
        // Add your splash screen intro logic here
    }, []);

    return (
        <>
            <div className={styles.intro}>
                <h1 className={styles.logoHeader}>
                    <span className={`${styles.logo} ${styles.loading}`}>Loading</span>
                    <span className={styles.logo}>.</span>
                    <span className={styles.logo}>.</span>
                    <span className={styles.logo}>.</span>
                </h1>
            </div>
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
        </>
    );
};

export default Home;

