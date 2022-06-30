import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ExploreIngredientS from './styled';

export default function ExploreIngredientsFoods() {
  const [igredients, setIgredients] = useState([]);
  const { setIgredient: setIgredientDrink } = useContext(AppContext);
  const [magicNumber] = useState('12');
  const history = useHistory();

  useEffect(() => {
    async function getIgredients() {
      try {
        const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
        const response = await fetch(endpoint);
        const { meals } = await response.json();
        setIgredients(meals);
      } catch (error) {
        return error;
      }
    }

    getIgredients();
  }, []);

  function toGoFoods(igredient) {
    setIgredientDrink(igredient);
    history.push('/foods');
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
            onClick={ () => toGoFoods(igredient.strIngredient) }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${igredient.strIngredient}-Small.png` }
              alt="igredient"
            />
            <p data-testid={ `${index}-card-name` }>{ igredient.strIngredient }</p>
          </button>
        )).slice(0, Number(magicNumber)) }
      </section>
      <MenuBar />
    </ExploreIngredientS>
  );
}
