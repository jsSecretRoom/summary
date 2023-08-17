import './myProjectSlider.scss';

import React, { useEffect } from 'react';

import Animations from '../Animations/Animations';

import ExpandrLeft from '../../img/expander_left.svg';
import ExpandrRight from '../../img/expander_right.svg';
import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';


function MyProjectSlider() {
    useEffect(() => {
        Animations('.head');
        Animations('.slide.activ');
        Animations('.slide.activ-left-right');
        Animations('.slider-navigation');
        Animations('.left');
        Animations('.right');
        
    }, []);
    return ( 
        <section className="projects-slider">
            <div className="head">
                <p>My projects</p>
            </div>
            <div className="slider">
                <div className="slider-conteiner">
                    <div className='button-continer'>
                        <button className="left"><img src={ExpandrLeft} alt="" /></button>
                        <button className="right"><img src={ExpandrRight} alt="" /></button>
                    </div>
                    <div className='slider-navigation'>
                        <div className='nav-dot-conteiner'>
                            <div className='nav-dot'></div>
                            <div className='nav-dot'></div>
                            <div className='nav-dot'></div>
                        </div>
                    </div>
                    <div className="carusell">
                        
                        <a href="#" className="slide activ-left-right">
                            <img src={slide1} alt="" />
                            
                        </a>
                        <a href="#" className="slide activ">
                            <img src={slide2} alt="" />
                            
                        </a>
                        <a href="#" className="slide activ-left-right">
                            <img src={slide1} alt="" />
                            
                        </a>
                        <a href="#" className="slide">
                            <img src={slide1} alt="" />
                           
                        </a>
                        <a href="#" className="slide">
                            <img src={slide1} alt="" />
                            
                        </a>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default MyProjectSlider;