import './socialIcons.scss'

import Line from '../../decorationsComponent/SectionLine/SectionLine';

import React, { useEffect } from 'react';

import Animations from '../Animations/Animations';

import Instogram from '../../img/Instagram.svg'
import Github from '../../img/Github.svg'
import LinkedIn from '../../img/LinkedIn.svg'
import Telegram from '../../img/Telegram.svg'

function SocialIcons() {

    useEffect(() => {
        Animations('.link');
    }, []);

    return ( 
        <section className="icons">
            <div className="images">
                <div className='link'><a className='links-image' href="https://www.instagram.com/ruslan_gubkin"><img src={Instogram} alt="Instogram" /></a></div>
                <div className='link'><a className='links-image' href="https://github.com/jsSecretRoom"><img src={Github} alt="Github" /></a></div>
                <div className='link'><a className='links-image' href="https://www.linkedin.com/in/ruslan-%D0%B3%D1%83%D0%B1%D0%BA%D0%B8%D0%BD-a0754824a/"><img src={LinkedIn} alt="LinkedIn" /></a></div>
                <div className='link'><a className='links-image' href="https://t.me/ruslangubkin"><img src={Telegram} alt="Telegram" /></a></div>
                
            </div>
        </section>
    );
}

export default SocialIcons;