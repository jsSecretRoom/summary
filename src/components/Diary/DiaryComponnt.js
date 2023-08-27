import './diary.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthPopup from '../AuthPopup/AuthPopup';
import Animations from '../Animations/Animations';
import Trach from '../../img/Trash.svg';
import Atom from '../../img/Atom.svg';

function Diary() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showAuthPopup, setShowAuthPopup] = useState(false);
    const [diaryText, setDiaryText] = useState('');
    const [diaryEntries, setDiaryEntries] = useState([]);

    useEffect(() => {
        Animations('.diary-group');
        Animations('.diary-body');
        Animations('.diary-footer');
    });

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
                    <button onClick={() => setShowAuthPopup(true)}><img src={Atom} alt="Atom" /></button>
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