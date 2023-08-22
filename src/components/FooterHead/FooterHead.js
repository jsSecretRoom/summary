import './footerHead.scss'
import Github from '../../img/Github.svg'
import Instagram from '../../img/Instagram.svg'
import LinkedIn from '../../img/LinkedIn.svg'
import Telegram from '../../img/Telegram.svg'

import Animations from '../Animations/Animations';
import { useEffect } from 'react';

function FooterHead() {
    useEffect(()=>{
        Animations('.nav-head');
    });
    return ( 
        <section className='nav-head'>
            <div className='phone'>
                <p className='phone-number'>Phone: +380677076893</p>
            </div>
            <div className='futer-link'>
                <a href="https://github.com/jsSecretRoom"><img src={Github} alt="Github" /></a>
                <a href="https://www.instagram.com/ruslan_gubkin"><img src={Instagram} alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/ruslan-%D0%B3%D1%83%D0%B1%D0%BA%D0%B8%D0%BD-a0754824a/"><img src={LinkedIn} alt="LinkedIn" /></a>
                <a href="https://t.me/ruslangubkin"><img src={Telegram} alt="Telegram" /></a>
            </div>
        </section>
    );
}

export default FooterHead;