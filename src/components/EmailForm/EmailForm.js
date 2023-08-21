import { useState } from 'react';
import './emailForm.scss';

function EmailForm({ onEmailSubmit }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Вызов функции для обработки введенного email
    onEmailSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Подтвердить</button>
    </form>
  );
}

export default EmailForm;
