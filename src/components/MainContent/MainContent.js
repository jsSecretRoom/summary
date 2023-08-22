import './mainContent.scss';

import Acquaintance from '../Acquaintance/Acquaintance';
import Line from '../../decorationsComponent/SectionLine/SectionLine';
import SkilsInfo from '../SkilsInfo/SlilsInfo';
import MyProjectSlider from '../MyProjectSlider/MyProjectSlider';
import SocialIcons from '../SocialIcons/SocialIcons';
import Diary from '../Diary/DiaryComponnt';
import FooterHead from '../FooterHead/FooterHead';
import NavBottom from '../NavBottom/NavBottom';

import ReaktDeco from '../../decorationsComponent/ReaktDeco/ReaktDeco';
import Animations from '../Animations/Animations';

import ReactSVG from '../../img/logo_react.svg';
import BlackReactSVG from '../../img/black_react_icon.svg';


import { useEffect, useState } from 'react';

function MainContent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(()=>{
    Animations('.decor-head');
    Animations('.decor-main1');
    Animations('.decor-main2');
    Animations('.decor-main3');
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <>
      <div className='main-conteiner'>
        <div className='decor-head'>
          <Acquaintance/>
          <Line/>
          <SocialIcons/>
          <Line/>
          <ReaktDeco imageSrc={ReactSVG}/>
          <ReaktDeco bottom="45%" left="75%" width="600px" height="600px" imageSrc={BlackReactSVG}/>
        </div>
        
        <div className='decor-main1'>
          <SkilsInfo/>
          <Line/>
          <ReaktDeco bottom="-5%" left="90%" width="200px" height="200px" imageSrc={ReactSVG}/>
        </div>
        <div className='decor-main2'>
          <MyProjectSlider/>
          <ReaktDeco bottom="70%" left="5%" width="200px" height="200px" imageSrc={ReactSVG}/>
        </div>
        <div className='decor-main3'>
          {windowWidth <= 1600 && <Line />}
          <Diary/>
          <Line/>
          <ReaktDeco bottom="-10%" left="50%" width="1000px" height="1000px" imageSrc={ReactSVG}/>
          <ReaktDeco bottom="-20%" left="-8%" width="300px" height="300px" imageSrc={ReactSVG}/>
        </div>
      </div>
      <footer className='animate-futer'>
        <FooterHead/>
        <NavBottom/>
      </footer>
    </>
  );
}

export default MainContent;