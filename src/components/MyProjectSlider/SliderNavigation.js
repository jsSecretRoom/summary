function SliderNavigation({ totalSlides, activeSlideIndex }) {
    const dots = Array.from({ length: totalSlides }, (_, index) => (
      <div
        key={index}
        className={`nav-dot ${index === activeSlideIndex ? 'active' : ''}`}
      >
        {index + 1}
      </div>
    ));
  
    return (
      <div className='slider-navigation'>
        <div className='nav-dot-conteiner'>
          {dots}
        </div>
      </div>
    );
}
export default SliderNavigation;