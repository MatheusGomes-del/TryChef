import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function Header({ title, enableSearchButton = false }) {
  return (
    <header>
      <Link to="/profile">
        <img
          src={ profileIcon }
          alt="search"
          data-testid="profile-top-btn"
        />
      </Link>

      <h1 data-testid="page-title">{ title }</h1>

      { enableSearchButton && <img
        src={ searchIcon }
        alt="search"
        role="presentation"
        data-testid="search-top-btn"
      /> }

      <input
        type="text"
        data-testid="search-input"
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  enableSearchButton: PropTypes.bool.isRequired,
};

export default Header;
