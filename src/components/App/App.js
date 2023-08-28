import './reset.css';
import './App.scss';
import './ModalStyles.scss';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Modal from 'react-modal';

import Nav from '../Nav/Nav';
import MainContent from '../MainContent/MainContent';
import AuthContainer from '../EmailForm/AuthContainer';

import ReaktDeco from '../../decorationsComponent/ReaktDeco/ReaktDeco';
import BlackReactSVG from '../../img/black_react_icon.svg';
import ReactSVG from '../../img/logo_react.svg';
import Trig from '../../img/trigenum.svg'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openItem, setOpenItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    {
      id: 1,
      label: 'Contacts',
      list: ['instagram', 'telegram', 'linkedin'],
      links: [
        'https://www.instagram.com/ruslan_gubkin',
        'https://t.me/ruslangubkin',
        'https://www.linkedin.com/in/ruslan-%D0%B3%D1%83%D0%B1%D0%BA%D0%B8%D0%BD-a0754824a/'
      ]
    },
    {
      id: 2,
      label: 'Projects',
      list: ['Project-1', 'Project-2', 'Project-3'],
      links: ['#', '#', '#']
    }
  ];

  const toggleList = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    Modal.setAppElement('#root');
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldRenderDecos = windowWidth >= 1600;

  return (
    <Router>
      <div className="App">
        <nav className="animate-nav">
          {isAuthenticated && (
            <Nav
              showModal={showModal}
              setShowModal={setShowModal}
              menuItems={menuItems}
              toggleList={toggleList}
              openItem={openItem}
            />
          )}
        </nav>
        <main>
          {shouldRenderDecos && (
            <>
              <ReaktDeco bottom="70%" left="65%" width="700px" height="700px" imageSrc={ReactSVG} />
              <ReaktDeco bottom="50%" left="-5%" width="400px" height="400px" imageSrc={BlackReactSVG} />
              <ReaktDeco bottom="30%" left="90%" width="300px" height="300px" imageSrc={ReactSVG} />
              <ReaktDeco bottom="10%" left="-5%" width="600px" height="600px" imageSrc={BlackReactSVG} />
            </>
          )}
          
          {isAuthenticated ? (
            <MainContent />
          ) : (
            <AuthContainer onAuthenticated={() => setIsAuthenticated(true)} />
          )}
            
          <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            contentLabel="Modal"
            className="custom-modal"
            overlayClassName="custom-overlay"
          >
            <div className="modal-content">
              <div className="menu">
                {menuItems.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className='trig-cont'>
                      <img className={`trig ${activeItem === item.id ? 'active' : ''}`} src={Trig} alt="Trig" />
                      <div
                        className={`menu-button ${activeItem === item.id ? 'active' : ''}`}
                        onClick={() => toggleList(item.id)}
                      >
                        {item.label}
                      </div>
                    </div>
                    {openItem === item.id && (
                      <ul className="sublist">
                        {item.list.map((subitem, index) => (
                          <div className='item'>
                            <a href={item.links[index]} key={index} className="sublist-item">
                              {subitem}
                            </a>
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Modal>
        </main>
      </div>
    </Router>
  );
}

export default App;