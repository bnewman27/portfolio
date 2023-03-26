import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Navbar.module.scss';

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <nav className={`${classes.nav} ${isLoaded ? classes.show : ''}`}>
      <div className={classes.navContainer}>
        <Link to="/" className={classes.navLink}>
          <button className={classes.navButton}>
            <p>Home</p>
          </button>
        </Link>
        <Link to="/about" className={classes.navLink}>
          <button className={classes.navButton}>
            <p>About</p>
          </button>
        </Link>
        <Link to="/projects" className={classes.navLink}>
          <button className={classes.navButton}>
            <p>Projects</p>
          </button>
        </Link>
        <Link to="/contact" className={classes.navLink}>
          <button className={classes.navButton}>
            <p>Contact</p>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

