import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';
import FavoriteCard from './styled';
import { getFavoriteRecipes, setFavoriteRecipes } from '../../../services/localStorage';
import ShareButton from '../ShareButton';

export default function FavoritesCard(props) {
  const { index, recipe, setList } = props;
  const { id, image, name, nationality, category, alcoholicOrNot, type } = recipe;

  const link = type === 'food' ? 'foods' : 'drinks';

  const removeFavorite = () => {
    const favorites = getFavoriteRecipes();
    const newFavorites = favorites.filter((favoriteRecipe) => favoriteRecipe.id !== id);
    setFavoriteRecipes(newFavorites);
    setList(newFavorites);
  };

  return (
    <FavoriteCard key={ index }>
      <Link to={ `/${link}/${id}` }>
        <img
          id="image"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
      </Link>

      <h3 id="category" data-testid={ `${index}-horizontal-top-text` }>
        {type === 'food' ? `${nationality} - ${category}` : `${alcoholicOrNot}`}
      </h3>
      <Link id="nameRecipe" to={ `/${link}/${id}` }>
        <h3 data-testid={ `${index}-horizontal-name` }>{ name }</h3>
      </Link>

      <ShareButton id={ id } type={ link } index={ index } done />

      <button
        type="button"
        id="Favorite"
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
    </FavoriteCard>
  );
}

FavoritesCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.shape.isRequired).isRequired,
  index: PropTypes.number.isRequired,
  setList: PropTypes.func.isRequired,
};
