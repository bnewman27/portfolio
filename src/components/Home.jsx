import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.scss';

const Home = () => {
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
                <h1>Home Page</h1>
            </div>
        </>
    );
};

export default Home;
