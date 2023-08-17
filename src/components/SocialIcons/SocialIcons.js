import './socialIcons.scss'

import React, { useEffect } from 'react';

import Animations from '../Animations/Animations';

import Instogram from '../../img/Instagram.svg'
import Github from '../../img/Github.svg'
import LinkedIn from '../../img/LinkedIn.svg'
import Telegram from '../../img/Telegram.svg'

function SocialIcons() {

    useEffect(() => {
        Animations('.links-image');
    }, []);

    return ( 
        <section className="icons">
            <div className="images">
                <a className='links-image' href=""><img src={Instogram} alt="Instogram" /></a>
                <a className='links-image' href=""><img src={Github} alt="Github" /></a>
                <a className='links-image' href=""><img src={LinkedIn} alt="LinkedIn" /></a>
                <a className='links-image' href=""><img src={Telegram} alt="Telegram" /></a>
            </div>
        </section>
    );
}

export default SocialIcons;