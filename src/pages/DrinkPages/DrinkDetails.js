import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import FoodCard from '../components/FoodCard';
import { getDoneRecipes, getFavoriteRecipes,
  getInProgressRecipes, setFavoriteRecipes } from '../../services/localStorage';
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

export default function DrinkDetails() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();
  const [drinkInfo, setDrinkInfo] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [foodList, setFood] = useState([]);
  const [shareMessage, setshareMessage] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const { actualRecipe } = useContext(AppContext);

  useEffect(() => {
    const fetchDrink = async () => {
      const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { drinks } = await result.json();
      setDrinkInfo(drinks[0]);

      const ingredientsList = Object.entries(drinks[0])
        .filter((info) => (info[0].includes('strIngredient') && info[1]))
        .map((ingredient) => ingredient[1]);
      setIngredients(ingredientsList);

      const quantitiesList = Object.entries(drinks[0])
        .filter((info) => (info[0].includes('strMeasure') && info[1]))
        .map((quantity) => quantity[1]);
      setQuantities(quantitiesList);
      actualRecipe({
        ...drinks[0],
        ingredientsList,
        quantitiesList,
      });
    };
    fetchDrink();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const fetchFoods = async () => {
      const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await result.json();

      const five = 5;
      let newListRecommend = meals;
      if (meals.length > five) {
        const six = 6;
        newListRecommend = meals.slice(0, six);
      }

      setFood(newListRecommend);
    };
    fetchFoods();
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
      id: drinkInfo.idDrink,
      type: 'drink',
      nationality: drinkInfo.strArea || '',
      category: drinkInfo.strCategory || '',
      alcoholicOrNot: drinkInfo.strAlcoholic || '',
      name: drinkInfo.strDrink,
      image: drinkInfo.strDrinkThumb,
    };
    setFavoriteRecipes([...favoriteRecipes, newRecipe]);
  };

  let buttonContinue = false;

  if (inProgressRecipesList.cocktails) {
    const inProgressDrinks = Object.keys(inProgressRecipesList.cocktails);
    buttonContinue = inProgressDrinks.some((recipe) => recipe === id);
  }

  const buttonStart = !doneRecipesList.some((recipe) => recipe.id === id);

  return (
    <div>
      <img
        width="100%"
        height="315"
        src={ drinkInfo.strDrinkThumb }
        alt={ drinkInfo.strDrink }
        data-testid="recipe-photo"
      />
      {' '}
      <h1 data-testid="recipe-title">{ drinkInfo.strDrink }</h1>
      <p data-testid="recipe-category">{drinkInfo.strAlcoholic}</p>
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
      <p data-testid="instructions">{drinkInfo.strInstructions}</p>
      <iframe
        title="RecipeTutorial"
        width="100%"
        height="315"
        data-testid="video"
        src={ drinkInfo.strVideo }
      />
      <RecommendStyle>
        {foodList && foodList.map((food, index2) => (
          <div key={ index2 } data-testid={ `${index2}-recomendation-card` }>
            <FoodCard
              food={ food }
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
          onClick={ () => history.push(`/drinks/${id}/in-progress`) }
        >
          Start Recipe
        </ButtonStart>
      )}
      {buttonContinue && (
        <ButtonStart
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => history.push(`/drinks/${id}/in-progress`) }
        >
          Continue Recipe
        </ButtonStart>
      )}

    </div>
  );
}
