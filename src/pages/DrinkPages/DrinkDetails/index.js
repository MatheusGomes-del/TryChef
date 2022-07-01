import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DrinkDetailsStyled from './styled';
import FavoriteButton from '../../components/FavoriteButton';
import ShareButton from '../../components/ShareButton';
import StartButton from '../../components/StartButton';
import FoodsRecommends from './FoodsRecommends';

export default function DrinkDetails() {
  const { id } = useParams() || 0;
  const [drinkInfo, setDrinkInfo] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [foodList, setFood] = useState([]);

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

  return (
    <>
      <DrinkDetailsStyled>
        <img
          width="100%"
          height="315"
          src={ drinkInfo.strDrinkThumb }
          alt={ drinkInfo.strDrink }
          data-testid="recipe-photo"
        />
        {' '}
        <div>
          <div>
            <p data-testid="recipe-title">{ drinkInfo.strDrink }</p>
            <p data-testid="recipe-category">{drinkInfo.strAlcoholic}</p>
          </div>
          <ShareButton id={ drinkInfo.idDrink } type="drinks" />
          <FavoriteButton id={ drinkInfo.idDrink } drinkInfo={ drinkInfo } type="drink" />
        </div>

        <section id="ingredients">
          <p>Ingredients</p>
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
        </section>

        <section id="instructions">
          <p>Instructions</p>
          <div data-testid="instructions">{drinkInfo.strInstructions}</div>
        </section>

        {/*
        <section id="video">
          <p>Video</p>
          <iframe
            width="341px"
            height="160px"
            data-testid="video"
            src={ drinkInfo?.strYoutube?.replace('watch?v=', 'embed/') }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;
             clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section> */}

      </DrinkDetailsStyled>

      <FoodsRecommends foodsList={ foodList } />

      <StartButton
        id={ drinkInfo.idDrink }
        type="drinks"
      />

    </>
  );
}
