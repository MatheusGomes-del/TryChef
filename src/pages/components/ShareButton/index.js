import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton({ id, type }) {
  const [shareMessage, setshareMessage] = useState(false);

  const shareButton = () => {
    setshareMessage(!shareMessage);
    copy(`http://localhost:3000/${type}/${id}`);
  };

  return (
    <button
      id="share"
      type="button"
      data-testid="share-btn"
      onClick={ shareButton }
    >
      {shareMessage ? (<p>Link copied!</p>) : (
        <img src={ shareIcon } alt="Share" />
      )}
    </button>
  );
}

ShareButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
