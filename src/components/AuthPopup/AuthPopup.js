import './authPopup.scss';
import { useState } from 'react';

function AuthPopup({ onAuthenticate }) {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (adminName === 'ruslangubkin' && password === 'frontend') {
            onAuthenticate(true);
        } else {
            console.log('faill');
        }
    };

    return (
        <div className="auth-popup">
            <form onSubmit={handleLogin}>
                <div className='my-input'>
                    <input
                        type="text"
                        placeholder="Admin Name"
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                        autoComplete="username"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default AuthPopup;