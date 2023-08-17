import './skilsInfo.scss';

import React, { useEffect } from 'react';
import Animations from '../Animations/Animations';


function SkilsInfo() {

    useEffect(() => {
        Animations('.frontend');
        Animations('.backend');
        Animations('.skil');
        Animations('.another');
    }, []);

    return ( 
        <section className='knowledge'>
            <p className='skil'>Skils</p>
            <div className='skils-box'>
                <div className='main-skills'>
                    <div className='frontend'>
                        <p>Frontend</p>
                        <div className='group'>
                            <ul className='column'>
                                <li>JS</li>
                                <li>TS</li>
                                <li>React</li>
                                <li>Redax</li>
                                <li>Tullkit</li>
                                <li>Html</li>
                            </ul>

                            <ul className='column'>
                                <li>React Bootstap</li>
                                <li>Git</li>
                                <li>Scss</li>
                                <li>Css</li>
                                <li>Webpack</li>
                                <li>Galp</li>
                            </ul>
                        </div>
                    </div>
                    <div className='backend'>
                        <p>Backend</p>
                        <div className='group'>
                            <ul className='column'>
                                <li>Node.js</li>
                                <li>Next.js</li>
                            </ul>
                            <ul className='column'>
                                <li>Puthon</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='another'>
                    <ul className='column'>
                        <li>Figma</li>
                    </ul>
                    <ul className='column'>
                        <li>Fotoshop</li>
                    </ul>
                    <ul className='column'>
                        <li>english B1</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SkilsInfo;