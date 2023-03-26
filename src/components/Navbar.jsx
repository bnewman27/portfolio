import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
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
        {/* Add other nav links as necessary */}
      </div>
    </nav>
  );
};

export default Navbar;
