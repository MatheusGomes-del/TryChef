import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

const ListaS = styled.p`
 background: ${({ teste }) => (teste ? 'red' : 'blue')};
`;

export default function FoodInProgress() {
  const [ingred, setIngred] = useState([]);
  const [quant, setQuant] = useState([]);
  const { recipeDetails } = useContext(AppContext);
  const { strMealThumb, strMeal, strCategory, strInstructions } = recipeDetails;
  const [shareMessage, setshareMessage] = useState(false);
  const [checked, setChecked] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchFood = async () => {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals } = await result.json();
      const ingredientsList = Object.entries(meals[0])
        .filter((info) => (info[0].includes('strIngredient') && info[1]))
        .map((ingredient) => ingredient[1]);
      setIngred(ingredientsList);

      const quantitiesList = Object.entries(meals[0])
        .filter((info) => (info[0].includes('strMeasure') && info[1]))
        .map((quantity) => quantity[1]);
      setQuant(quantitiesList);
    };
    fetchFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const shareButton = () => {
    setshareMessage(true);
    copy(`http://localhost:3000${pathname}`);
  };

  const checkButton = ({ target }) => {
    setChecked(target.checked);
  };

  const radiosIngredients = () => {
    const checkIngredients = ingred.map((ingrediente, index) => (
      <li key={ index }>
        <input
          id={ `ingrediente${index}` }
          data-testid={ `${index}-ingredient-step` }
          key={ index }
          type="checkbox"
          onClick={ checkButton }
          // checked={ false }
        />
        {' '}
        <label htmlFor={ `ingrediente${index}` } key={ index }>
          <ListaS teste={ checked }>{`${ingrediente} - ${quant[index]}`}</ListaS>
        </label>
      </li>
    ));
    return checkIngredients;
  };

  return (
    <>
      <img
        width="420"
        height="315"
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt={ strMeal }
      />
      <div>
        <h1
          data-testid="recipe-title"
        >
          {strMeal}
        </h1>
        <button
          data-testid="share-btn"
          type="button"
          onClick={ shareButton }
        >
          {shareMessage ? (<p>Link copied!</p>) : (
            <img src={ shareIcon } alt="Share" />
          )}
        </button>
        <button
          type="button"
          data-testid="favorite-btn"
        >
          <img src={ whiteHeartIcon } alt="button favorite" />
        </button>
      </div>
      <p
        data-testid="recipe-category"
      >
        {strCategory}
      </p>
      <ol>
        {radiosIngredients()}
      </ol>
      <p
        data-testid="instructions"
      >
        {strInstructions}
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </>
  );
}
