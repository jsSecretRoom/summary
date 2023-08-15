import './nav.scss';
import MainImg from '../../img/Menu-img.svg';

function Nav() {
    return ( 
      <nav>
        <div className='nav-conteiner'>
          <ul>
            <li><a href="">contacts </a></li>
            <li><a href="">projects </a></li>
            <li><a href="">diary</a></li>
            <li><button className='main-button'><img src={MainImg} alt="main-ico" /></button></li>
            
          </ul>
          <ul>
            <li>
              <button className='work-info'>Looking for a job</button>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Nav;