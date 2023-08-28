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

  return (
    <div className="nav-conteiner">
      <ul>
        <li><a href="">contacts</a></li>
        <li><a href="">projects</a></li>
        <li><a href="">diary</a></li>
        <li>
          {/* Используйте функцию для управления состоянием модального окна */}
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