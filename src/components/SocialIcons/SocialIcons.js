import './socialIcons.scss'

import Instogram from '../../img/Instagram.svg'
import Github from '../../img/Github.svg'
import LinkedIn from '../../img/LinkedIn.svg'
import Telegram from '../../img/Telegram.svg'

function SocialIcons() {
    return ( 
        <section className="icons">
            <div className="imags">
                <a href=""><img src={Instogram} alt="Instogram" /></a>
                <a href=""><img src={Github} alt="Github" /></a>
                <a href=""><img src={LinkedIn} alt="LinkedIn" /></a>
                <a href=""><img src={Telegram} alt="Telegram" /></a>
            </div>
        </section>
    );
}

export default SocialIcons;