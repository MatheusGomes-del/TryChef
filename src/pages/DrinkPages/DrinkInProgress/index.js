import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { setInProgressRecipes, getInProgressRecipes }
from '../../../services/localStorage';
import FavoriteButton from '../../components/FavoriteButton';
import FinishButton from '../../components/FinishButton';
import ShareButton from '../../components/ShareButton';
import DrinkInProgressStyled from './styled';

const ListaS = styled.span`
 text-decoration: ${({ teste }) => (teste ? 'line-through' : 'none')};
 font-size: 1.1rem;
 color: ${({ teste }) => (teste ? 'green' : 'black')};
`;

const inProgressList = getInProgressRecipes() || [];

export default function DrinkInProgress() {
  const { id } = useParams();
  const [ingred, setIngredients] = useState([]);
  const [quant, setQuant] = useState([]);
  const [drinkInfo, setDrinkInfo] = useState({});

  useEffect(() => {
    const fetchDrink = async () => {
      const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { drinks } = await result.json();

      setDrinkInfo(drinks[0]);

      const ingredientsList = Object.entries(drinks[0])
        .filter((info) => (info[0].includes('strIngredient') && info[1]))
        .map((ingredient) => ({ name: ingredient[1], done: false }));
      const quantitiesList = Object.entries(drinks[0])
        .filter((info) => (info[0].includes('strMeasure') && info[1]))
        .map((quantity) => (quantity[1]));

      setQuant(quantitiesList);

      const inProgress = getInProgressRecipes();

      const inProgressRecipe = inProgress?.cocktails?.[id] || 0;

      if (inProgressRecipe !== 0) {
        setIngredients(inProgressRecipe);
      } else {
        setIngredients(ingredientsList);
      }
    };
    fetchDrink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const checkButton = (indexCheck) => {
    const newListIng = ingred.map((ingrediente, index) => {
      if (index === indexCheck) {
        return { name: ingrediente.name, done: !ingrediente.done };
      }
      return ingrediente;
    });
    setIngredients(newListIng);

    const newRecipe = {
      ...inProgressList,
      cocktails: {
        ...inProgressList.cocktails,
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
      <DrinkInProgressStyled>
        <img
          data-testid="recipe-photo"
          src={ drinkInfo.strDrinkThumb }
          alt={ drinkInfo.strDrink }
        />
        <div>
          <div>
            <p data-testid="recipe-title">
              {drinkInfo.strDrink}
            </p>
            <p id="category" data-testid="recipe-category">
              {drinkInfo.strCategory}
            </p>
          </div>
          <ShareButton id={ drinkInfo.idDrink } type="drinks" />
          <FavoriteButton id={ drinkInfo.idDrink } drinkInfo={ drinkInfo } type="drink" />
        </div>

        <section>
          <p>Ingredients</p>
          <ol>
            {radiosIngredients()}
          </ol>
        </section>

        <section id="instructions">
          <p>Instructions</p>
          <div data-testid="instructions">{drinkInfo.strInstructions}</div>
        </section>
      </DrinkInProgressStyled>
      <FinishButton type="drink" drinkInfo={ drinkInfo } ingred={ ingred } />
    </>
  );
}
