import './reset.css';
import './App.scss';

import React, { useState, useEffect } from 'react';

import Nav from '../Nav/Nav';
import MainContent from '../MainContent/MainContent';
import AuthContainer from '../EmailForm/AuthContainer';

import ReaktDeco from '../../decorationsComponent/ReaktDeco/ReaktDeco';
import BlackReactSVG from '../../img/black_react_icon.svg';
import ReactSVG from '../../img/logo_react.svg';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldRenderDecos = windowWidth >= 1600;

  return (
    <Router>
      <div className="App">
        <nav className='animate-nav'>
          {isAuthenticated && <Nav />}
        </nav>
        <main>
          {shouldRenderDecos && (
            <>
              <ReaktDeco bottom="70%" left="65%" width="700px" height="700px" imageSrc={BlackReactSVG}/>
              <ReaktDeco bottom="50%" left="-5%" width="400px" height="400px" imageSrc={ReactSVG}/>
              <ReaktDeco bottom="30%" left="90%" width="300px" height="300px" imageSrc={ReactSVG}/>
              <ReaktDeco bottom="10%" left="-5%" width="600px" height="600px" imageSrc={BlackReactSVG}/>
            </>
          )}
          {isAuthenticated ? (
            <MainContent />
          ) : (
            <AuthContainer onAuthenticated={() => setIsAuthenticated(true)} />
          )}
        </main>
      </div>
    </Router>
  );
}
export default App;
