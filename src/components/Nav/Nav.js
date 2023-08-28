import './nav.scss';

import React, { useEffect } from 'react';
import Animations from '../Animations/Animations';
import MainImg from '../../img/Menu-img.svg';

function Nav({ showModal, setShowModal }) {
  useEffect(() => {
    Animations('.nav-conteiner');
    Animations('.animate-nav');
  }, []);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleNavLinkClick = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav-conteiner">
      <ul>
        <li><a href="#contacts" onClick={(e) => handleNavLinkClick(e, 'skils')}>skils</a></li>
        <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>projects</a></li>
        <li><a href="#diary" onClick={(e) => handleNavLinkClick(e, 'diary')}>diary</a></li>
        <li>
          <button className="main-button" onClick={handleModalToggle}>
            <img src={MainImg} alt="main-ico" />
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <button className="work-info">Looking for a job</button>
        </li>
      </ul>
    </div>
  );
}

export default Nav;