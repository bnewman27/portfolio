import React, { useRef, useEffect } from 'react';
import classes from '../styles/Home.module.scss';

const Home = () => {
  const introRef = useRef(null);
  const logoRef = useRef(null);
  const logoSpansRef = useRef([]);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current) {
      setTimeout(() => {
        logoSpansRef.current.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.add(classes.active);
          }, (idx + 1) * 400);
        });

        setTimeout(() => {
          logoSpansRef.current.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.remove(classes.active);
              span.classList.add(classes.fade);
            });
          });
        }, 2500);

        setTimeout(() => {
          if (introRef.current) {
            introRef.current.classList.add(classes['fade-out']);
          }
          if (logoRef.current) {
            logoRef.current.classList.add(classes.fade);
          }
        }, 3000);

        // Add the following lines to show the navbar after the animation is complete
        setTimeout(() => {
          const nav = document.querySelector('nav');
          if (nav) {
            nav.classList.add(classes.visible);
          }
        }, 3500);

        isLoaded.current = true;
      });
    }
  }, []);

  return (
    <>
      <div className={classes.loading}>
        <div className={classes['loading-container']}>
          <h1 className={classes['logo-header']} ref={logoRef}>
            <span
              className={classes.logo}
              ref={(el) => logoSpansRef.current.push(el)}
            >
              Loading
            </span>
            <span
              className={classes.logo}
              ref={(el) => logoSpansRef.current.push(el)}
            >
              .
            </span>
            <span
              className={classes.logo}
              ref={(el) => logoSpansRef.current.push(el)}
            >
              .
            </span>
            <span
              className={classes.logo}
              ref={(el) => logoSpansRef.current.push(el)}
            >
              .
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;

