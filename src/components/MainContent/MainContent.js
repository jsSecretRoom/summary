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
          <ReaktDeco bottom="35%" left="-5%" width="400px" height="400px" zIndex="-2" imageSrc={ReactSVG}/>
          <ReaktDeco bottom="20%" left="75%" width="200px" height="200px" zIndex="-2" imageSrc={BlackReactSVG}/>
          <ReaktDeco bottom="10%" left="25%" width="70px" height="70px" zIndex="-2" imageSrc={BlackReactSVG}/>
          <ReaktDeco bottom="60%" left="60%" width="90px" height="90px" zIndex="-2" imageSrc={BlackReactSVG}/>
        </div>
        <div className='decor-main1'>
          <SkilsInfo/>
          <Line/>
          <ReaktDeco bottom="-5%" left="90%" width="200px" height="200px" zIndex="-2" imageSrc={ReactSVG}/>
        </div>
        <div className='decor-main2'>
          <MyProjectSlider/>
        </div>
        <div className='decor-main3'>
          {windowWidth <= 1600 && <Line />}
          <Diary/>
          <Line/>
          <ReaktDeco bottom="-10%" left="50%" width="600px" height="600px" zIndex="-2" imageSrc={ReactSVG}/>
          <ReaktDeco bottom="50%" left="0%" width="300px" height="300px" zIndex="-2" imageSrc={ReactSVG}/>
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