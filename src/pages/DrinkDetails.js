import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FoodCard from './components/FoodCard';

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

export default function DrinkDetails() {
  const { id } = useParams();
  const [drinkInfo, setDrinkInfo] = useState({});
  const [foodList, setFood] = useState([]);
  console.log(drinkInfo);
  useEffect(() => {
    const fetchDrink = async () => {
      const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const { drinks } = await result.json();
      setDrinkInfo(drinks[0]);
      const resultFood = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const { meals } = await resultFood.json();
      let newList = meals;
      const five = 5;
      if (meals.length > five) {
        const six = 6;
        newList = meals.slice(0, six);
      }
      console.log(newList);
      setFood(newList);
    };
    fetchDrink();
  }, [id]);
  const DrinkToArray = Object.entries(drinkInfo);
  const ingredients = DrinkToArray.filter((ingredient) => (
    ingredient[0].includes('strIngredient') && ingredient[1]));
  const ingredientsQuant = DrinkToArray.filter((ingredient) => (
    ingredient[0].includes('strMeasure') && ingredient[1]));
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
            {`${ingredient[1]} : ${ingredientsQuant[index][1]}` }

          </li>
        ))}
      </ul>
      <p data-testid="instructions">{drinkInfo.strInstructions}</p>
      <iframe
        title="tchurusbango"
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

      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favorite</button>
      <ButtonStart type="button" data-testid="start-recipe-btn">Start</ButtonStart>

    </div>
  );
}
