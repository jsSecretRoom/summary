import './reset.css';
import './App.scss';

import Nav from '../Nav/Nav';
import Acquaintance from '../Acquaintance/Acquaintance';
import Line from '../SectionLine/SectionLine';
import SkilsInfo from '../SkilsInfo/SlilsInfo';
import MyProjectSlider from '../MyProjectSlider/MyProjectSlider';

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
            <SkilsInfo/>
            <Line/>
            <MyProjectSlider/>
            <Line/>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
