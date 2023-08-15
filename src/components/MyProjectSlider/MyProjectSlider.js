import './myProjectSlider.scss';
function MyProjectSlider() {
    return ( 
        <section className="projects-slider">
            <div className="">
                <p>My projects</p>
            </div>
            <div className="slider">
                <div className="slider-conteiner">
                    <button className="left"><img src="" alt="" /></button>
                    <div className="carusell">
                        <a href="" className="slide">
                            <img src="" alt="" />
                            <p>1/3</p>
                        </a>
                        <a href="" className="slide">
                            <img src="" alt="" />
                            <p>1/3</p>
                        </a>
                        <a href="" className="slide">
                            <img src="" alt="" />
                            <p>1/3</p>
                        </a>
                        
                    </div>
                    <button className="right"><img src="" alt="" /></button>
                </div>
            </div>
        </section>
    );
}

export default MyProjectSlider;