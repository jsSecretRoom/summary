import { useState } from 'react';
import ReaktDeco from '../../decorationsComponent/ReaktDeco/ReaktDeco'

import ReactSVG from '../../img/logo_react.svg';
import ReactSVGBlack from '../../img/black_react_icon.svg';
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
      <ReaktDeco bottom="70%" left="0%" width="200px" height="200px" zIndex="-2" imageSrc={ReactSVG}/>
      <ReaktDeco bottom="-20%" left="25%" width="300px" height="300px" zIndex="-2" imageSrc={ReactSVG}/>
      <ReaktDeco bottom="40%" left="70%" width="200px" height="200px" zIndex="-2" imageSrc={ReactSVGBlack}/>
    </form>
  );
}

export default EmailForm;
