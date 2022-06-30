import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { setInProgressRecipes, getInProgressRecipes }
from '../../../services/localStorage';
import FavoriteButton from '../../components/FavoriteButton';
import FinishButton from '../../components/FinishButton';
import ShareButton from '../../components/ShareButton';
import FoodInProgressStyled from './styled';

const ListaS = styled.span`
 text-decoration: ${({ teste }) => (teste ? 'line-through' : 'none')};
 font-size: 1.1rem;
 color: ${({ teste }) => (teste ? 'green' : 'black')};
`;

const inProgressList = getInProgressRecipes() || [];

export default function FoodInProgress() {
  const [ingred, setIngred] = useState([]);
  const [quant, setQuant] = useState([]);
  const [foodInfo, setFoodInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchFood = async () => {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals: food } = await result.json();

      setFoodInfo(food[0]);

      const ingredientsList = Object.entries(food[0])
        .filter((info) => (info[0].includes('strIngredient') && info[1]))
        .map((ingredient) => ({ name: ingredient[1], done: false }));

      const quantitiesList = Object.entries(food[0])
        .filter((info) => (info[0].includes('strMeasure') && info[1]))
        .map((quantity) => (quantity[1]));

      setQuant(quantitiesList);

      const inProgress = getInProgressRecipes();

      const inProgressRecipe = inProgress?.meals[id] || 0;

      if (inProgressRecipe !== 0) {
        setIngred(inProgressRecipe);
      } else {
        setIngred(ingredientsList);
      }
    };
    fetchFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const checkButton = (indexCheck) => {
    const newListIng = ingred.map((ingrediente, index) => {
      if (index === indexCheck) {
        return { name: ingrediente.name, done: !ingrediente.done };
      }
      return ingrediente;
    });
    setIngred(newListIng);

    const newRecipe = {
      ...inProgressList,
      meals: {
        ...inProgressList.meals,
        [id]: newListIng,
      },
    };
    setInProgressRecipes(newRecipe);
  };

  const radiosIngredients = () => {
    const checkIngredients = ingred.map((ingrediente, index) => (
      <li key={ index } data-testid={ `${index}-ingredient-step` }>
        <input
          id={ `ingrediente${index}` }
          type="checkbox"
          checked={ ingrediente.done }
          defaultChecked={ ingrediente.done }
          onChange={ () => checkButton(index) }
        />
        {' '}
        <label htmlFor={ `ingrediente${index}` }>
          <ListaS teste={ ingrediente.done }>
            {`${ingrediente.name} - ${quant[index]}`}
          </ListaS>
        </label>
      </li>
    ));
    return checkIngredients;
  };

  return (
    <>
      <FoodInProgressStyled>
        <img
          data-testid="recipe-photo"
          src={ foodInfo.strMealThumb }
          alt={ foodInfo.strMeal }
        />
        <div>
          <div>
            <p data-testid="recipe-title">
              {foodInfo.strMeal}
            </p>
            <p id="category" data-testid="recipe-category">
              {foodInfo.strCategory}
            </p>
          </div>
          <ShareButton id={ foodInfo.idMeal } type="foods" />
          <FavoriteButton id={ foodInfo.idMeal } foodInfo={ foodInfo } type="food" />
        </div>
        <section>
          <p>Ingredients</p>
          <ol>
            {radiosIngredients()}
          </ol>
        </section>
        <section id="instructions">
          <p>Instructions</p>
          <div data-testid="instructions">{foodInfo.strInstructions}</div>
        </section>
      </FoodInProgressStyled>
      <FinishButton type="food" foodInfo={ foodInfo } ingred={ ingred } />
    </>
  );
}
