import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getFavoriteRecipes, setFavoriteRecipes } from '../../../services/localStorage';
import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';

export default function FavoriteButton(props) {
  const { id, foodInfo, drinkInfo, type } = props;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favoriteRecipes = getFavoriteRecipes() || [];
    const isFavorite = favoriteRecipes.some((recipe) => recipe.id === id);
    setFavorite(isFavorite);
  }, [id]);

  const favoriteButton = () => {
    const favoriteRecipes = getFavoriteRecipes() || [];
    let newRecipe = {};

    setFavorite(!favorite);

    if (!favorite === false) {
      const newFavoriteRecipes = favoriteRecipes.filter((recipe) => recipe.id !== id);
      return setFavoriteRecipes(newFavoriteRecipes);
    }
    if (type === 'food') {
      newRecipe = {
        id: foodInfo.idMeal,
        type: 'food',
        nationality: foodInfo.strArea || '',
        category: foodInfo.strCategory || '',
        alcoholicOrNot: foodInfo.strAlcoholic || '',
        name: foodInfo.strMeal,
        image: foodInfo.strMealThumb,
      };
    } else {
      newRecipe = {
        id: drinkInfo.idDrink,
        type: 'drink',
        nationality: drinkInfo.strArea || '',
        category: drinkInfo.strCategory || '',
        alcoholicOrNot: drinkInfo.strAlcoholic || '',
        name: drinkInfo.strDrink,
        image: drinkInfo.strDrinkThumb,
      };
    }

    setFavoriteRecipes([...favoriteRecipes, newRecipe]);
  };

  return (
    <button
      type="button"
      onClick={ favoriteButton }
    >
      <img
        src={ favorite ? blackHeartIcon : whiteHeartIcon }
        alt="Favorite"
        data-testid="favorite-btn"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  foodInfo: PropTypes.objectOf(PropTypes.shape),
  drinkInfo: PropTypes.objectOf(PropTypes.shape),
};

FavoriteButton.defaultProps = {
  foodInfo: {},
  drinkInfo: {},
};
