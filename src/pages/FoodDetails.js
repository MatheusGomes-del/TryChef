import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DrinkCard from './components/DrinkCard';

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

export default function FoodDetails() {
  const { id } = useParams();
  const [foodInfo, setFoodInfoInfo] = useState({});
  const [drinkList, setDrink] = useState([]);
  useEffect(() => {
    const fetchFood = async () => {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { meals } = await result.json();
      setFoodInfoInfo(meals[0]);
      const resultFood = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const { drinks } = await resultFood.json();
      let newList = drinks;
      const five = 5;
      if (drinks.length > five) {
        const six = 6;
        newList = drinks.slice(0, six);
      }
      console.log(newList);
      setDrink(newList);
    };
    fetchFood();
  }, [id]);
  const foodToArray = Object.entries(foodInfo);
  const ingredients = foodToArray.filter((ingredient) => (
    ingredient[0].includes('strIngredient') && ingredient[1]));
  const ingredientsQuant = foodToArray.filter((ingredient) => (
    ingredient[0].includes('strMeasure') && ingredient[1]));
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
            {`${ingredient[1]} : ${ingredientsQuant[index][1]}` }

          </li>
        ))}
      </ul>
      <p data-testid="instructions">{foodInfo.strInstructions}</p>
      <iframe
        title="tchurusbango"
        width="420"
        height="315"
        data-testid="video"
        src={ foodInfo.strVideo }
      />
      <RecommendStyle>
        {drinkList && drinkList.map((drink, index2) => (
          <div key={ index2 } data-testid={ `${index2}-recomendation-card` }>
            <DrinkCard
              drink={ drink }
              idTest={ index2 }
              test="recomendation-title"
            />
          </div>
        ))}
      </RecommendStyle>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favorite</button>
      <ButtonStart type="button" data-testid="start-recipe-btn">Start</ButtonStart>

    </div>
  );
}
