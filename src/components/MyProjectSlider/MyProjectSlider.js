import './myProjectSlider.scss';

import { useEffect, useState } from 'react';
import Animations from '../Animations/Animations';

import SliderNavigation from './SliderNavigation';
import MySlidesComponent from './MySlidesComponent';

import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';

import ExpandrLeft from '../../img/expander_left.svg';
import ExpandrRight from '../../img/expander_right.svg';

const allSlides = [slide1, slide2, slide3];

function MyProjectSlider() {

    useEffect(() => {
        Animations('.head');
        Animations('.slide.activ');
        Animations('.screen');
        Animations('.screen-centr');
        Animations('.left');
        Animations('.right');
        Animations('.slider-navigation');
    }, []);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleNextSlide = () => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % allSlides.length);
    };
  
    const handlePreviousSlide = () => {
      setActiveSlideIndex((prevIndex) =>
        prevIndex === 0 ? allSlides.length - 1 : prevIndex - 1
      );
    };
  
    const leftSlideIndex = activeSlideIndex - 1 < 0 ? allSlides.length - 1 : activeSlideIndex - 1;
    const rightSlideIndex = (activeSlideIndex + 1) % allSlides.length;

    return ( 
        <section className="projects-slider">
            <div className="head">
                <p>My projects</p>
            </div>
            <div className="slider">
                <div className="slider-conteiner">
                    <div className='button-continer'>
                        <button className="left" onClick={handlePreviousSlide}>
                            <img src={ExpandrLeft} alt="ExpandrLeft" />
                        </button>
                        <button className="right" onClick={handleNextSlide}>
                            <img src={ExpandrRight} alt="ExpandrRight" />
                        </button>
                    </div>
                    
                    <div className='carusell'>
                        <div id='left-screen' className="screen">
                            <MySlidesComponent slideprop={allSlides} activeIndex={leftSlideIndex} />
                        </div>
                        <div id='centr-screen' className="screen-centr">
                            <MySlidesComponent slideprop={allSlides} activeIndex={activeSlideIndex} />
                        </div>
                        <div id='right-screen' className="screen">
                            <MySlidesComponent slideprop={allSlides} activeIndex={rightSlideIndex} />
                        </div>
                    </div>
                    <SliderNavigation totalSlides={allSlides.length} activeSlideIndex={activeSlideIndex} />
                </div>
            </div>
        </section>
    );
}

export default MyProjectSlider;