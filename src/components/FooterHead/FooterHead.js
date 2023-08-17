import './footerHead.scss'
import Github from '../../img/Github.svg'
import Instagram from '../../img/Instagram.svg'
import LinkedIn from '../../img/LinkedIn.svg'
import Telegram from '../../img/Telegram.svg'

function FooterHead() {
    return ( 
        <section className='nav-head'>
            <div className='phone'>
                <p>Phone: +380677076893</p>
            </div>
            <div className='futer-link'>
                <a href=""><img src={Github} alt="Github" /></a>
                <a href=""><img src={Instagram} alt="Instagram" /></a>
                <a href=""><img src={LinkedIn} alt="LinkedIn" /></a>
                <a href=""><img src={Telegram} alt="Telegram" /></a>
            </div>
        </section>
    );
}

export default FooterHead;