import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setCocktailsToken, setMealsToken, saveEmail } from '../../services/localStorage';
// import rockGlass from '../../images/rockGlass.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css';
import LoginStyled from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const maxLength = 6;
    const validate = !(validateEmail.test(email) && password.length > maxLength);
    setButtonDisabled(validate);
  }, [email, password]);

  const submit = () => {
    setCocktailsToken(1);
    setMealsToken(1);
    saveEmail({ email });
    history.push('/foods');
  };

  return (
    <LoginStyled>
      <div>
        <span>Try-Chef</span>
        <p>Food-if edition</p>
        {/* <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object> */}
      </div>
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ buttonDisabled }
          onClick={ submit }
        >
          Enter
        </button>
      </form>

    </LoginStyled>
  );
}
