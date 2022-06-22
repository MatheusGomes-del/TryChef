import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import DrinkCard from '../components/DrinkCard';
import { getDoneRecipes, getInProgressRecipes,
  getFavoriteRecipes, setFavoriteRecipes } from '../../services/localStorage';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import AppContext from '../../context/AppContext';

const copy = require('clipboard-copy');

const RecommendStyle = styled.section`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  height: 300px;
  div {
    width: 200px;
    height: 150px;
    padding: 10px;
    margin-left: 10px;
  }
`;

const ButtonStart = styled.button`
  position: fixed;
  bottom: 0;
`;

const doneRecipesList = getDoneRecipes() || [];
const inProgressRecipesList = getInProgressRecipes() || {};
const favoriteRecipes = getFavoriteRecipes() || [];

export default function FoodDetails() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();
  const [foodInfo, setFoodInfo] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [drinksList, setDrinks] = useState([]);
  const [shareMessage, setshareMessage] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { actualRecipe } = useContext(AppContext);

  useEffect(() => {
    const fetchFood = async () => {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals } = await result.json();
      setFoodInfo(meals[0]);

      const ingredientsList = Object.entries(meals[0])
        .filter((info) => (info[0].includes('strIngredient') && info[1]))
        .map((ingredient) => ingredient[1]);
      setIngredients(ingredientsList);

      const quantitiesList = Object.entries(meals[0])
        .filter((info) => (info[0].includes('strMeasure') && info[1]))
        .map((quantity) => quantity[1]);
      setQuantities(quantitiesList);
      actualRecipe({
        ...meals[0],
        ingredientsList,
        quantitiesList,
      });
    };
    fetchFood();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const fetchDrinks = async () => {
      const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const { drinks } = await result.json();
      let newListRecommend = drinks;
      const five = 5;
      if (drinks.length > five) {
        const six = 6;
        newListRecommend = drinks.slice(0, six);
      }
      setDrinks(newListRecommend);
    };
    fetchDrinks();
  }, []);

  useEffect(() => {
    const isFavorite = favoriteRecipes.some((recipe) => recipe.id === id);
    setFavorite(isFavorite);
  }, [id]);

  const shareButton = () => {
    setshareMessage(true);
    copy(`http://localhost:3000${pathname}`);
  };

  const favoriteButton = () => {
    setFavorite(!favorite);
    const newRecipe = {
      id: foodInfo.idMeal,
      type: 'food',
      nationality: foodInfo.strArea || '',
      category: foodInfo.strCategory || '',
      alcoholicOrNot: foodInfo.strAlcoholic || '',
      name: foodInfo.strMeal,
      image: foodInfo.strMealThumb,
    };
    setFavoriteRecipes([...favoriteRecipes, newRecipe]);
  };

  let buttonContinue = false;

  if (inProgressRecipesList.meals) {
    const inProgressMeals = Object.keys(inProgressRecipesList.meals);
    buttonContinue = inProgressMeals.some((recipe) => recipe === id) || false;
  }

  const buttonStart = !doneRecipesList.some((recipe) => recipe.id === id);

  return (
    <div>
      <img
        width="420"
        height="315"
        src={ foodInfo.strMealThumb }
        alt={ foodInfo.strMeal }
        data-testid="recipe-photo"
      />
      {' '}
      <h1 data-testid="recipe-title">{ foodInfo.strMeal }</h1>
      <p data-testid="recipe-category">{foodInfo.strCategory}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient} : ${quantities[index]}` }

          </li>
        ))}
      </ul>
      <p data-testid="instructions">{foodInfo.strInstructions}</p>
      <iframe
        title="RecipeTutorial"
        width="420"
        height="315"
        data-testid="video"
        src={ foodInfo.strVideo }
      />
      <RecommendStyle>
        {drinksList && drinksList.map((drink, index2) => (
          <div key={ index2 } data-testid={ `${index2}-recomendation-card` }>
            <DrinkCard
              drink={ drink }
              idTest={ index2 }
              test="recomendation-title"
            />
          </div>
        ))}
      </RecommendStyle>

      <button
        type="button"
        data-testid="share-btn"
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

      {buttonStart && (
        <ButtonStart
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`/foods/${id}/in-progress`) }
        >
          Start Recipe
        </ButtonStart>
      )}

      {buttonContinue && (
        <ButtonStart
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`/foods/${id}/in-progress`) }
        >
          Continue Recipe
        </ButtonStart>
      )}

    </div>
  );
}
