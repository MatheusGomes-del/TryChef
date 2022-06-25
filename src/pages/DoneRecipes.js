import React, { useEffect, useState } from 'react';
import Header from './components/Header';

export default function DoneRecipes() {
  const [recipesDone, setRecipesDone] = useState([]);

  useEffect(() => {
    function getRecipesDone() {
      const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
      setRecipesDone(recipes);
      console.log(recipes);
    }

    getRecipesDone();
  }, []);

  return (
    <>
      <Header title="Done Recipes" />
      <div>
        <section>
          <button type="button" data-testid="filter-by-all-btn">All</button>
          <button type="button" data-testid="filter-by-food-btn">Food</button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
          >
            Drink

          </button>
          {
            recipesDone.map((igredient, index) => (
              <div key={ index }>
                <img
                  src={ igredient.image }
                  data-testid={ `${index}-horizontal-image` }
                  alt="comida"
                />
                <p data-testid={ `${index}-horizontal-top-text` } />
                { igredient.category }
                <h2 data-testid={ `${index}-horizontal-name` }>{ igredient.name }</h2>
                <p data-testid={ `${index}-horizontal-done-date` }>
                  { igredient.doneDate }

                </p>
                <p data-testid={ `${index}-horizontal-share-btn` }>
                  { igredient.nacionality}

                </p>
                <p data-testid={ `${index}-${igredient.tags[0]}-tag` }>
                  { igredient.tags[0] }

                </p>
                <p data-testid={ `${index}-${igredient.tags[1]}-tag` }>
                  { igredient.tags[1] }

                </p>
              </div>
            ))
          }

        </section>
      </div>
    </>
  );
}
