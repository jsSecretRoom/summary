import './diary.scss'

import React, { useEffect } from 'react';

import Animations from '../Animations/Animations';

import Trach from  '../../img/Trash.svg'
import Atom from '../../img/Atom.svg'

function Diary() {
    useEffect(()=>{
        Animations('.diary-head');
        Animations('.diary-body');
        Animations('.diary-footer');
    });
    return ( 
        <section className="diary">
            <div className='diary-head'>
                <p>Chronological diary</p>
                <button><img src={Atom} alt="Atom" /></button>
            </div>
            <div className='diary-body'>
                <input type="text" name="diary-text" id="diary-text" placeholder='my-dairy-text' />
            </div>
            <div className='diary-footer'>
                <div className='list'>
                    <p>qrw ewrewr erwer ererer</p>
                    <button><img src={Trach} alt="Trach" /></button>
                </div>
                <div className='list'>
                    <p>qrw ewrewr erwer ererer</p>
                    <button><img src={Trach} alt="Trach" /></button>
                </div>
                <div className='list'>
                    <p>qrw ewrewr erwer ererer</p>
                    <button><img src={Trach} alt="Trach" /></button>
                </div>
            </div>
        </section>
    );
}

export default Diary;