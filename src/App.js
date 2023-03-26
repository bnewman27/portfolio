import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [isSplashScreenShown, setIsSplashScreenShown] = useState(true);

  const handleSplashScreenFinish = () => {
    setIsSplashScreenShown(false);
  };

  return (
    <Router>
      {isSplashScreenShown && <SplashScreen onFinish={handleSplashScreenFinish} />}
      {!isSplashScreenShown && (
        <>
          <Navbar />
          <div style={{ marginTop: '64px' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </>
      )}
    </Router>
  );
};

export default App;






