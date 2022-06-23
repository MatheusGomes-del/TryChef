import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

export default function FoodInProgress() {
  const { recipeDetails } = useContext(AppContext);
  const { strMealThumb, strMeal, strCategory, strInstructions } = recipeDetails;
  const { ingredientsList, quantitiesList } = recipeDetails;

  const radiosIngredients = () => {
    const checkIngredients = ingredientsList.map((ingrediente, index) => (
      <li key={ index }>
        <label htmlFor={ `ingrediente${index}` } key={ index }>
          {`${ingrediente} - ${quantitiesList[index]}`}
          <input
            id={ `ingrediente${index}` }
            data-testid={ `${index}-ingredient-step` }
            key={ index }
            type="checkbox"
          />
        </label>
      </li>
    ));
    return checkIngredients;
  };

  return (
    <>
      <p>Comida em precesso</p>
      <img
        width="420"
        height="315"
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt={ strMeal }
      />
      <h1
        data-testid="recipe-title"
      >
        {strMeal}
      </h1>
      <button
        data-testid="share-btn"
        type="button"
      >
        <img src={ shareIcon } alt="button share" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        <img src={ whiteHeartIcon } alt="button favorite" />
      </button>
      <p
        data-testid="recipe-category"
      >
        {strCategory}
      </p>
      {radiosIngredients()}
      <p
        data-testid="instructions"
      >
        {strInstructions}
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>
    </>
  );
}
