import { useState } from 'react';
import ReaktDeco from '../../decorationsComponent/ReaktDeco/ReaktDeco'

import ReactSVG from '../../img/logo_react.svg';
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
        name="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Подтвердить</button>
      <ReaktDeco bottom="40%" left="-5%" width="500px" height="500px" imageSrc={ReactSVG}/>
      <ReaktDeco bottom="-20%" left="50%" width="1000px" height="1000px" imageSrc={ReactSVG}/>
    </form>
  );
}

export default EmailForm;
