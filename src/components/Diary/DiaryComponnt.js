import './diary.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthPopup from '../AuthPopup/AuthPopup';
import Animations from '../Animations/Animations';
import Trach from '../../img/Trash.svg';
import Atom from '../../img/Atom.svg';

const initialDiaryEntries = [
    "14d/05m/2022y - Started learning frontend.",
    "14d/07m/2022y - Learned basic HTML & CSS ",
    "14d/08m/2022y - I practiced cross-browser layout, consolidated my knowledge in practice",
    "15d/08m/2022y - Started reading the basic java script",
    "01d/09m/2022y - At the same time I learned English",
    "10d/01m/2023y - Tested js base, practiced codeware, read documentation",
    "20d/02m/2023y - Starting js & React course on udemy",
    "01d/04m/2023y - Actively hacking js and practicing it in my projects, improving my knowledge of the design and logic of sites",
    "15d/04m/2023y - Actively read the React library",
    "15d/08m/2023y - Having created this project, I've enriched the project and my portfolio",
    "27d/08m/2023y - I will study additional libraries and learn advanced practices",
];

function Diary() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showAuthPopup, setShowAuthPopup] = useState(false);
    const [diaryText, setDiaryText] = useState('');
    const [diaryEntries, setDiaryEntries] = useState(initialDiaryEntries);

    useEffect(() => {
        Animations('.diary-group');
        Animations('.diary-body');
        Animations('.diary-footer');
    }, []);

    useEffect(() => {
        const storedEntries = localStorage.getItem('diaryEntries');
        if (storedEntries) {
            setDiaryEntries(JSON.parse(storedEntries));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
    }, [diaryEntries]);

    const handleInputChange = (e) => {
        setDiaryText(e.target.value);
    };

    const handleEnterKey = async (e) => {
        if (e.key === 'Enter' && diaryText.trim() !== '') {
          try {
            await axios.post('/api/save-entry', { entryText: diaryText });
            setDiaryText('');
          } catch (error) {
            console.error('Error saving entry:', error);
          }
        }
    };

    const handleDeleteEntry = (index) => {
        const newEntries = diaryEntries.filter((_, i) => i !== index);
        setDiaryEntries(newEntries);
    };

    const handleAuthenticate = () => {
        setIsAuthenticated(true);
        setShowAuthPopup(false);
    };

    return (
        <section className="diary">
            <div className='diary-head'>
                <div className='diary-group'>
                    <p>Chronological diary</p>
                    <button onClick={() => setShowAuthPopup(!showAuthPopup)}><img src={Atom} alt="Atom" /></button>
                </div>
                <div className='auth-group'>
                    {showAuthPopup && (
                        <AuthPopup
                            onAuthenticate={handleAuthenticate}
                        />
                    )}
                </div>
            </div>
            
            {isAuthenticated && (
                <div className='diary-body'>
                <input
                    type="text"
                    name="diary-text"
                    id="diary-text"
                    placeholder='my-diary-text'
                    value={diaryText}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterKey}
                />
                </div>
            )}
            <div className='diary-footer'>
                {diaryEntries.map((entry, index) => (
                <div className='list' key={index}>
                    <p>{entry}</p>
                    <button onClick={() => handleDeleteEntry(index)}>
                    <img src={Trach} alt="Trach" />
                    </button>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Diary;