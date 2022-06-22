import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function FoodInProgress() {
  const { recipeDetails } = useContext(AppContext);
  console.log(recipeDetails);
  const { strMealThumb, strMeal, strCategory, strInstructions } = recipeDetails;

  const radiosIngredients = () => {
    const entries = Object.entries(recipeDetails);
    const ingredientes = entries.filter((ingrediente) => (
      ingrediente[0].includes('strIngredient') && ingrediente[1]));
    return (
      ingredientes.map((ingrediente, index) => (
        <label htmlFor={ `ingrediente${index}` } key={ index }>
          {ingrediente}
          <input
            id={ `ingrediente${index}` }
            key={ index }
            type="checkbox"
          />
        </label>
      ))
    );
  };
  return (
    <>
      <p>Comida em precesso</p>
      <img
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
        Compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favoritar
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
