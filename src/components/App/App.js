import './reset.css';
import './App.scss';

import Nav from '../Nav/Nav';
import Acquaintance from '../Acquaintance/Acquaintance';
import Line from '../../decorationsComponent/SectionLine/SectionLine';
import SkilsInfo from '../SkilsInfo/SlilsInfo';
import MyProjectSlider from '../MyProjectSlider/MyProjectSlider';
import SocialIcons from '../SocialIcons/SocialIcons';
import Diary from '../Diary/DiaryComponnt';
import FooterHead from '../FooterHead/FooterHead';
import NavBottom from '../NavBottom/NavBottom';
import EmailForm from '../EmailForm/EmailForm';

import ReaktDeco from '../../decorationsComponent/ReaktDeco/ReaktDeco';
import Animations from '../Animations/Animations';

import ReactSVG from '../../img/logo_react.svg';
import BlackReactSVG from '../../img/black_react_icon.svg';


import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {

  useEffect(()=>{
    Animations('.decor-head');
    Animations('.decor-main1');
    Animations('.decor-main2');
    Animations('.decor-main3');
    Animations('.animate-futer');
  })

  return (
    <Router>
      
      <div className="App">
        <EmailForm/>
        <Nav/>
        <main>
          
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
              <Line/>
              <ReaktDeco bottom="70%" left="5%" width="200px" height="200px" imageSrc={ReactSVG}/>
            </div>
            <div className='decor-main3'>
              <Diary/>
              <Line/>
              <ReaktDeco bottom="-10%" left="50%" width="1000px" height="1000px" imageSrc={ReactSVG}/>
              <ReaktDeco bottom="-20%" left="-8%" width="300px" height="300px" imageSrc={ReactSVG}/>
            </div>
          </div>
        </main>
        
        <footer className='animate-futer'>
          <FooterHead/>
          <NavBottom/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
