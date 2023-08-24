import React, { useState, useEffect } from 'react';
import AuthPopup from '../AuthPopup/AuthPopup';
import Animations from '../Animations/Animations';
import Trach from '../../img/Trash.svg';
import Atom from '../../img/Atom.svg';
import './diary.scss'

function Diary() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showAuthPopup, setShowAuthPopup] = useState(false);
    const [diaryText, setDiaryText] = useState('');
    const [entries, setEntries] = useState([]); // Здесь храним записи

    useEffect(() => {
        Animations('.diary-group');
        Animations('.diary-body');
        Animations('.diary-footer');
    }, []);

    useEffect(() => {
        // Запрос на получение записей при монтировании компонента
        fetch('https://summary-iota-indol.vercel.app/api/diary') // Замените на URL вашего сервера на Vercel
            .then(response => response.json())
            .then(data => setEntries(data))
            .catch(error => console.error('Error fetching diary entries:', error));
    }, []);

    useEffect(() => {
        localStorage.setItem('diaryEntries', JSON.stringify(entries));
    }, [entries]);

    const handleInputChange = (e) => {
        setDiaryText(e.target.value);
    };

    const handleEnterKey = (e) => {
        if (e.key === 'Enter' && diaryText.trim() !== '') {
            const newEntry = { text: diaryText };
            setEntries([...entries, newEntry]); // Добавляем новую запись в entries
            setDiaryText('');
        }
    };

    const handleDeleteEntry = (index) => {
        const newEntries = entries.filter((_, i) => i !== index);
        setEntries(newEntries);
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
                {entries.map((entry, index) => (
                    <div className='list' key={index}>
                        <p>{entry.text}</p>
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