import './navBottom.scss'
import Animations from '../Animations/Animations';
import { useEffect } from 'react';
function NavBottom() {
    useEffect(()=>{
        Animations('.nav-bottom');
    });
    return ( 
        <section className='nav-bottom'>
            <div className='border'><a href='https://github.com/jsSecretRoom'><p>Github</p></a></div>
            <div className='border'><a href='https://www.linkedin.com/in/ruslan-%D0%B3%D1%83%D0%B1%D0%BA%D0%B8%D0%BD-a0754824a/'><p>Linkaddin</p></a></div>
            <div className='border'><a href='https://www.codewars.com/users/Rus1anGU'><p>Codewars</p></a></div>
        </section>
    );
}

export default NavBottom;