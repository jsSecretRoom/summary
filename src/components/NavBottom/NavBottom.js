import './navBottom.scss'
import Animations from '../Animations/Animations';
import { useEffect } from 'react';
function NavBottom() {
    useEffect(()=>{
        Animations('.nav-bottom');
    });
    return ( 
        <section className='nav-bottom'>
            <div className='border'><a href='#'><p>Github</p></a></div>
            <div className='border'><a href='#'><p>Linkaddin</p></a></div>
            <div className='border'><a href='#'><p>Codewars</p></a></div>
        </section>
    );
}

export default NavBottom;