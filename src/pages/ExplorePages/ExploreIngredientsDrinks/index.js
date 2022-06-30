import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ExploreIngredientS from '../ExploreIngredientsFoods/styled';

export default function ExploreIngredientsDrinks() {
  const [igredients, setIgredients] = useState([]);
  const [magicNumber] = useState('12');
  const { setIgredient: setIgredientDrink } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    async function getIgredients() {
      try {
        const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
        const response = await fetch(endpoint);
        const { drinks } = await response.json();
        setIgredients(drinks);
      } catch (error) {
        return error;
      }
    }

    getIgredients();
  }, []);

  function toGoDrinks(igredient) {
    setIgredientDrink(igredient);
    history.push('/drinks');
  }

  return (
    <ExploreIngredientS>
      <Header title="Explore Ingredients" />
      <section>
        { igredients.map((igredient, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => toGoDrinks(igredient.strIngredient1) }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${igredient.strIngredient1}-Small.png` }
              alt="igredient"
            />
            <p data-testid={ `${index}-card-name` }>{ igredient.strIngredient1 }</p>
          </button>
        )).slice(0, Number(magicNumber)) }
      </section>
      <MenuBar />
    </ExploreIngredientS>
  );
}
