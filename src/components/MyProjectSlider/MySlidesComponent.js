import React from 'react';

function MySlidesComponent({ slideprop, activeIndex }) {
  return (
    <div className='img-block'>
      <a href="#">
        <img src={slideprop[activeIndex]} alt="" />
      </a>
    </div>
  );
}

export default MySlidesComponent;