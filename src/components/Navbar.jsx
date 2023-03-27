import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Navbar.module.scss';

const Navbar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0 && !isHidden) {
        setIsHidden(true);
      } else if (scrollPosition === 0 && isHidden) {
        setIsHidden(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHidden]);

  return (
    <nav className={`${classes.nav} ${isLoaded ? classes.show : ''} ${isHidden ? classes.hide : ''}`}>
      <div className={classes.navContainer}>
        <Link to="/" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>Home</p>
          </button>
        </Link>
        <Link to="/about" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>About</p>
          </button>
        </Link>
        <Link to="/skills" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>Skills</p>
          </button>
        </Link>
        <Link to="/projects" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>Projects</p>
          </button>
        </Link>
        <Link to="/contact" className={classes.navLink}>
          <button className={classes.navButton}>
            <p className={classes.navName}>Contact</p>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



