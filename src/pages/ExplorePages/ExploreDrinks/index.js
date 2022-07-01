import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ExploreDrinkS from './styled';

export default function ExploreDrinks() {
  const history = useHistory();

  const onSurpriseMe = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const { drinks } = await response.json();
      const { idDrink } = drinks[0];

      history.push(`/drinks/${idDrink}`);
    } catch (error) {
      console.error('Error getting the random drinks');
    }
  };

  return (
    <ExploreDrinkS>
      <Header title="Explore Drinks" />
      <section>
        <Link to="/explore/drinks/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ onSurpriseMe }
        >
          Surprise me!
        </button>
      </section>
      <MenuBar />
    </ExploreDrinkS>
  );
}
