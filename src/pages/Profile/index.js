import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import ProfileStyled from './styled';

export default function Profile() {
  const [emailUser, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    function getEmailFromLocalStorage() {
      const email = JSON.parse(localStorage.getItem('user'));
      setEmail(email);
      console.log(email);
    }

    getEmailFromLocalStorage();
  }, []);

  return (
    <ProfileStyled>
      <Header title="Profile" />
      <section>
        <p data-testid="profile-email">{ emailUser?.email }</p>
        <button
          type="button"
          data-testid="profile-done-btn"
          className="buttons"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes

        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes

        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => { localStorage.clear(); history.push('/'); } }
        >
          Logout

        </button>
      </section>
      <MenuBar />
    </ProfileStyled>
  );
}
