import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import AppContext from '../../context/AppContext';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import { setInProgressRecipes, getInProgressRecipes,
  getFavoriteRecipes, setFavoriteRecipes } from '../../services/localStorage';

const copy = require('clipboard-copy');

const ListaS = styled.p`
 text-decoration: ${({ teste }) => (teste ? 'line-through' : 'none')};
`;

const favoriteRecipes = getFavoriteRecipes() || [];

export default function FoodInProgress() {
  const [ingred, setIngred] = useState([]);
  const [quant, setQuant] = useState([]);
  const [foodInfo, setFoodInfo] = useState({});
  // const { recipeDetails } = useContext(AppContext);
  // const { strMealThumb, strMeal, strCategory, strInstructions } = recipeDetails;
  const [shareMessage, setshareMessage] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchFood = async () => {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals } = await result.json();

      setFoodInfo(meals[0]);
      const ingredientsList = Object.entries(meals[0])
        .filter((info) => (info[0].includes('strIngredient') && info[1]))
        .map((ingredient) => ({ name: ingredient[1], done: false }));
      console.log(ingredientsList);

      const quantitiesList = Object.entries(meals[0])
        .filter((info) => (info[0].includes('strMeasure') && info[1]))
        .map((quantity) => ({ name: quantity[1], done: false }));
      setQuant(quantitiesList);

      const inProgress = getInProgressRecipes();
      console.log(inProgress);

      const inProgressRecipe = inProgress?.meals[id];

      if (inProgressRecipe !== undefined) {
        setIngred(inProgressRecipe);
      } else {
        setIngred(ingredientsList);
      }
    };
    fetchFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const isFavorite = favoriteRecipes.some((recipe) => recipe.id === id);
    setFavorite(isFavorite);
  }, [id]);

  const shareButton = () => {
    setshareMessage(true);
    copy(`http://localhost:3000/foods/${id}`);
  };

  const checkButton = (indexCheck) => {
    const newListIng = ingred.map((ingrediente, index) => {
      if (index === indexCheck) {
        return { name: ingrediente.name, done: !ingrediente.done };
      }
      return ingrediente;
    });
    setIngred(newListIng);

    const inProgress = getInProgressRecipes() || {};

    const newRecipe = {
      ...inProgress,
      meals: {
        ...inProgress.meals,
        [id]: newListIng,
      },
    };
    setInProgressRecipes(newRecipe);
  };

  const favoriteButton = () => {
    setFavorite(!favorite);
    const newRecipe = {
      id: foodInfo.idMeal,
      type: 'food',
      nationality: foodInfo.strArea || '',
      category: foodInfo.strCategory || '',
      alcoholicOrNot: '',
      name: foodInfo.strMeal,
      image: foodInfo.strMealThumb,
    };
    console.log(foodInfo);
    console.log(newRecipe);
    console.log(favoriteRecipes);
    setFavoriteRecipes([...favoriteRecipes, newRecipe]);
  };

  const radiosIngredients = () => {
    const checkIngredients = ingred.map((ingrediente, index) => (
      <li key={ index } data-testid={ `${index}-ingredient-step` }>
        <input
          id={ `ingrediente${index}` }
          type="checkbox"
          checked={ ingrediente.done }
          onClick={ () => checkButton(index) }
        />
        {' '}
        <label htmlFor={ `ingrediente${index}` }>
          <ListaS teste={ ingrediente.done }>
            {`${ingrediente.name} - ${quant[index]?.name}`}
          </ListaS>
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
        src={ foodInfo.strMealThumb }
        alt={ foodInfo.strMeal }
      />
      <div>
        <h1
          data-testid="recipe-title"
        >
          {foodInfo.strMeal}
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
          onClick={ favoriteButton }
        >
          <img
            src={ favorite ? blackHeartIcon : whiteHeartIcon }
            alt="Favorite"
            data-testid="favorite-btn"
          />
        </button>
      </div>
      <p
        data-testid="recipe-category"
      >
        {foodInfo.strCategory}
      </p>
      <ol>
        {radiosIngredients()}
      </ol>
      <p
        data-testid="instructions"
      >
        {foodInfo.strInstructions}
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ () => history.push('/done-recipes') }
        disabled={ !ingred.every(({ done }) => done === true) }
      >
        Finish Recipe
      </button>
    </>
  );
}
