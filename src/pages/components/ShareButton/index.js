import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../../../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton({ id, type, index, done }) {
  const [shareMessage, setshareMessage] = useState(false);

  const shareButton = () => {
    setshareMessage(!shareMessage);
    copy(`http://localhost:3000/${type}/${id}`);
  };

  return (
    <button
      id="share"
      type="button"
      data-testid={ done ? `${index}-horizontal-share-btn` : 'share-btn' }
      onClick={ shareButton }
      src={ shareIcon }
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
  index: PropTypes.number,
  done: PropTypes.bool,
};

ShareButton.defaultProps = {
  index: 0,
  done: false,
};
