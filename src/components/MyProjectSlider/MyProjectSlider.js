import './myProjectSlider.scss';

import ExpandrLeft from '../../img/expander_left.svg';
import ExpandrRight from '../../img/expander_right.svg';
import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';


function MyProjectSlider() {
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
                        
                        <a href="#" className="slide activ-left">
                            <img src={slide1} alt="" />
                            <p className='indicator'>1/3</p>
                        </a>
                        <a href="#" className="slide activ">
                            <img src={slide2} alt="" />
                            <p className='indicator'>1/3</p>
                        </a>
                        <a href="#" className="slide activ-right">
                            <img src={slide1} alt="" />
                            <p className='indicator'>1/3</p>
                        </a>
                        <a href="#" className="slide">
                            <img src={slide1} alt="" />
                            <p className='indicator'>1/3</p>
                        </a>
                        <a href="#" className="slide">
                            <img src={slide1} alt="" />
                            <p className='indicator'>1/3</p>
                        </a>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default MyProjectSlider;