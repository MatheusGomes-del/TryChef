import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonFinish from './styled';
import { setDoneRecipes, getDoneRecipes } from '../../../services/localStorage';

export default function FinishButton(props) {
  const { type, foodInfo, drinkInfo, ingred } = props;
  const history = useHistory();
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const finishRecipe = () => {
    const doneRecipes = getDoneRecipes() || [];
    let newRecipe = {};
    if (type === 'food') {
      newRecipe = {
        id: foodInfo.idMeal,
        type: 'food',
        nationality: foodInfo.strArea || '',
        category: foodInfo.strCategory || '',
        alcoholicOrNot: '',
        name: foodInfo.strMeal,
        image: foodInfo.strMealThumb,
        doneDate: today.toLocaleDateString(),
        tags: foodInfo.strTags.split(',') || [],
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
        doneDate: today.toLocaleDateString(),
        tags: drinkInfo.strTags ? drinkInfo.strTags.split(',') : [],
      };
    }
    setDoneRecipes([...doneRecipes, newRecipe]);

    history.push('/done-recipes');
  };
  return (
    <ButtonFinish>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ finishRecipe }
        disabled={ !ingred.every(({ done }) => done === true) }
      >
        Finish Recipe
      </button>
    </ButtonFinish>
  );
}

FinishButton.propTypes = {
  type: PropTypes.string.isRequired,
  foodInfo: PropTypes.objectOf(PropTypes.shape),
  drinkInfo: PropTypes.objectOf(PropTypes.shape),
  ingred: PropTypes.arrayOf(PropTypes.shape),
};

FinishButton.defaultProps = {
  foodInfo: {},
  drinkInfo: {},
  ingred: [],
};
