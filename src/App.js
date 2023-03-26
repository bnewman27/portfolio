import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </>
      )}
    </Router>
  );
};

export default App;





