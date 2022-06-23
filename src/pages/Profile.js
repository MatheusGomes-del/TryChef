import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

export default function Profile() {
  const [emailUser, setEmail] = useState('');

  useEffect(() => {
    function getEmailFromLocalStorage() {
      const { email } = JSON.parse(localStorage.getItem('user'));
      setEmail(email);
      console.log(email);
    }

    getEmailFromLocalStorage();
  }, []);

  return (
    <>
      <Header title="Profile" />
      <div>
        <section>
          <p data-testid="profile-email">{ emailUser }</p>
          <button
            type="button"
            data-testid="profile-done-btn"
            className="buttons"
          >
            Done Recipes

          </button>
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes

          </button>
          <button
            type="button"
            data-testid="profile-logout-btn"
          >
            Logout

          </button>
        </section>
      </div>
      <MenuBar />
    </>
  );
}
