import './authPopup.scss';
import { useState, useEffect } from 'react';

function AuthPopup({ onAuthenticate }) {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    useEffect(() => {
        if (loginFailed) {
            const timer = setTimeout(() => {
                setLoginFailed(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [loginFailed]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (adminName === 'ruslangubkin' && password === 'frontend') {
            onAuthenticate(true);
        } else {
            setLoginFailed(true);
        }
    };

    return (
        <div className={`auth-popup ${loginFailed ? 'failed' : ''}`}>
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