import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodDetailsStyled from './styled';
import DrinksRecommends from './DrinksRecommends';
import FavoriteButton from '../../components/FavoriteButton';
import ShareButton from '../../components/ShareButton';
import StartButton from '../../components/StartButton';

export default function FoodDetails() {
  const { id } = useParams();
  const [foodInfo, setFoodInfo] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [drinksList, setDrinks] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals } = await result.json();
      setFoodInfo(meals[0]);
      console.log(meals[0]);

      const ingredientsList = Object.entries(meals[0])
        .filter((info) => (info[0].includes('strIngredient') && info[1]))
        .map((ingredient) => ingredient[1]);
      setIngredients(ingredientsList);

      const quantitiesList = Object.entries(meals[0])
        .filter((info) => (info[0].includes('strMeasure') && info[1]))
        .map((quantity) => quantity[1]);
      setQuantities(quantitiesList);
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

  return (
    <>
      <FoodDetailsStyled>
        <img
          width="420"
          height="315"
          src={ foodInfo.strMealThumb }
          alt={ foodInfo.strMeal }
          data-testid="recipe-photo"
        />
        {' '}
        <div>
          <div>
            <p data-testid="recipe-title">{ foodInfo.strMeal }</p>
            <p data-testid="recipe-category" id="category">{foodInfo.strCategory}</p>
          </div>
          <ShareButton id={ foodInfo.idMeal } type="foods" />
          <FavoriteButton id={ foodInfo.idMeal } foodInfo={ foodInfo } type="food" />
        </div>

        <section id="ingredients">
          <p>Ingredients</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                -
                {' '}
                {`${ingredient} : ${quantities[index]}` }

              </li>
            ))}
          </ul>
        </section>
        <section id="instructions">
          <p>Instructions</p>
          <div data-testid="instructions">{foodInfo.strInstructions}</div>
        </section>

        <section id="video">
          <p>Video</p>
          <iframe
            width="341px"
            height="160px"
            data-testid="video"
            src={ foodInfo?.strYoutube?.replace('watch?v=', 'embed/') }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;
             clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>
      </FoodDetailsStyled>

      <DrinksRecommends drinksList={ drinksList } />

      <StartButton
        id={ foodInfo.idMeal }
        type="foods"
      />
    </>
  );
}
