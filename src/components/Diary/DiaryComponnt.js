import './diary.scss'
import React, { useState, useEffect } from 'react';
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
        const fetchEntries = async () => {
            try {
                const response = await fetch('/api/diary');
                const entries = await response.json();
                setDiaryEntries(entries);
            } catch (error) {
                console.error('Error fetching diary entries:', error);
            }
        };
        fetchEntries();
    }, []);

    const handleInputChange = (e) => {
        setDiaryText(e.target.value);
    };

    const handleEnterKey = async (e) => {
        if (e.key === 'Enter' && diaryText.trim() !== '') {
            try {
                const response = await fetch('/api/diary', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ text: diaryText })
                });
                const newEntry = await response.json();
                setDiaryEntries([...diaryEntries, newEntry]);
                setDiaryText('');
            } catch (error) {
                console.error('Error adding diary entry:', error);
            }
        }
    };

    const handleDeleteEntry = async (index) => {
        try {
            await fetch(`/api/diary/${diaryEntries[index]._id}`, {
                method: 'DELETE'
            });
            const newEntries = diaryEntries.filter((_, i) => i !== index);
            setDiaryEntries(newEntries);
        } catch (error) {
            console.error('Error deleting diary entry:', error);
        }
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
                    <div className='list' key={entry._id}>
                        <p>{entry.text}</p>
                        {isAuthenticated && (
                            <button onClick={() => handleDeleteEntry(index)}>
                                <img src={Trach} alt="Trash" />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Diary;