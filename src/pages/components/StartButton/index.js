import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ButtonStart from './styled';
import { getInProgressRecipes, getDoneRecipes } from '../../../services/localStorage';

export default function StartButton({ id, type }) {
  const inProgressRecipesList = getInProgressRecipes() || {};
  const [buttonContinue, setContinue] = useState(false);
  const [doneRecipe, setDoneRecipe] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (inProgressRecipesList?.meals) {
      const inProgressMeals = Object.keys(inProgressRecipesList?.meals);
      return setContinue(inProgressMeals.some((recipe) => recipe === id) || false);
    }

    if (inProgressRecipesList?.cocktails) {
      const inProgressMeals = Object.keys(inProgressRecipesList?.cocktails);
      return setContinue(inProgressMeals.some((recipe) => recipe === id) || false);
    }

    const doneRecipesList = getDoneRecipes() || [];
    const done = doneRecipesList.some((recipe) => recipe?.id === id);
    setDoneRecipe(done);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <ButtonStart>
      {doneRecipe ? '' : (
        <button
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`/${type}/${id}/in-progress`) }
        >
          {buttonContinue ? 'Continue Recipe' : 'Start Recipe' }
        </button>
      )}
    </ButtonStart>
  );
}

StartButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// StartButton.defaultProps = {
//   id: '0',
// };
