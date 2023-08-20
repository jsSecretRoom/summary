import './reset.css';
import './App.scss';

import Nav from '../Nav/Nav';
import Acquaintance from '../Acquaintance/Acquaintance';
import Line from '../SectionLine/SectionLine';
import SkilsInfo from '../SkilsInfo/SlilsInfo';
import MyProjectSlider from '../MyProjectSlider/MyProjectSlider';
import SocialIcons from '../SocialIcons/SocialIcons';
import Diary from '../Diary/DiaryComponnt';
import FooterHead from '../FooterHead/FooterHead';
import NavBottom from '../NavBottom/NavBottom';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Nav/>
        <main>
          <div className='main-conteiner'>
            <Acquaintance/>
            <Line/>
            <SocialIcons/>
            <Line/>
            <SkilsInfo/>
            <Line/>
            <MyProjectSlider/>
            <Line/>
            <Diary/>
          </div>
        </main>
        <footer>
          <FooterHead/>
          <NavBottom/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
