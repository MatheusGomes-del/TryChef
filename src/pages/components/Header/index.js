import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../../../images/profileIcon.svg';
import searchIcon from '../../../images/searchIcon.svg';
import BarraDeBusca from '../BarraDeBusca';
import HeaderStyle from './style';

function Header({ title, enableSearchButton }) {
  const [displaySearchInput, setDisplaySearchInput] = useState(false);

  const showSearchInput = () => {
    setDisplaySearchInput(!displaySearchInput);
  };

  return (
    <HeaderStyle>
      <Link to="/profile">
        <img
          src={ profileIcon }
          alt="search"
          data-testid="profile-top-btn"
        />
      </Link>

      <h1 data-testid="page-title">{ title }</h1>

      { enableSearchButton && (
        <div id="searchIcon">
          <img
            src={ searchIcon }
            alt="search"
            onClick={ showSearchInput }
            role="presentation"
            data-testid="search-top-btn"
          />
        </div>)}

      { displaySearchInput && <BarraDeBusca /> }
    </HeaderStyle>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  enableSearchButton: PropTypes.bool,
};

Header.defaultProps = {
  enableSearchButton: false,
};

export default Header;
