import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { getFavoriteRecipes, setFavoriteRecipes } from '../../services/localStorage';

const copy = require('clipboard-copy');

const CardS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  img{
    width: 150px;
  }
  #share{
    width: 25px;
  }
  #Favorite{
    width: 25px;
  }
`;

export default function FavoritesCard(props) {
  const { index, recipe, setList } = props;
  const { id, image, name, nationality, category, alcoholicOrNot, type } = recipe;

  const [shareMessage, setshareMessage] = useState(false);

  const link = type === 'food' ? 'foods' : 'drinks';

  const shareButton = () => {
    setshareMessage(true);
    copy(`http://localhost:3000/${link}/${id}`);
  };

  const removeFavorite = () => {
    const favorites = getFavoriteRecipes();
    const newFavorites = favorites.filter((favoriteRecipe) => favoriteRecipe.id !== id);
    setFavoriteRecipes(newFavorites);
    setList(newFavorites);
  };

  return (
    <CardS key={ index }>
      <Link to={ `/${link}/${id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
      </Link>
      <div>
        <div>
          <h3 data-testid={ `${index}-horizontal-top-text` }>
            {type === 'food' ? `${nationality} - ${category}` : `${alcoholicOrNot}`}
          </h3>
          <Link to={ `/${link}/${id}` }>
            <h3 data-testid={ `${index}-horizontal-name` }>{ name }</h3>
          </Link>
        </div>
        <button
          type="button"
          onClick={ shareButton }
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
        >
          <img
            id="share"
            src={ shareIcon }
            alt="Share"
          />
        </button>
        { shareMessage && <p>Link copied!</p>}
        <button
          type="button"
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          onClick={ removeFavorite }
        >
          <img
            id="Favorite"
            src={ blackHeartIcon }
            alt="Favorite"
          />
        </button>
      </div>
    </CardS>
  );
}

FavoritesCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.shape.isRequired).isRequired,
  index: PropTypes.number.isRequired,
  setList: PropTypes.func.isRequired,
};
