import React, { useState } from 'react';
import EmailForm from './EmailForm';


function AuthContainer({ onAuthenticated }) {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (enteredEmail) => {
    // Здесь вы можете реализовать проверку email, если необходимо
    // В данном примере, мы просто сохраняем email
    setEmail(enteredEmail);
    onAuthenticated();
  };

  return (
    <>
      {!email && <EmailForm onEmailSubmit={handleEmailSubmit} />}
    </>
  );
}

export default AuthContainer;
