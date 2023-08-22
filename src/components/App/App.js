import './reset.css';
import './App.scss';

import React, { useState } from 'react';

import Nav from '../Nav/Nav';
import MainContent from '../MainContent/MainContent';
import AuthContainer from '../EmailForm/AuthContainer';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Nav />}
        <main>
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
