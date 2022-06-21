import React, { useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import AppContext from '../context/AppContext';
import DrinkCard from './components/DrinkCard';
import MenuBar from './components/MenuBar';

export default function Drinks() {
  const { list } = useContext(AppContext);
  const { drinks } = useContext(AppContext);
  const [categoryDrink, setCategoryDrink] = useState([]);
  const [magigNumber] = useState('5');

  useEffect(() => {
    async function getCategorysDrink() {
      try {
        const endopint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const response = await fetch(endopint);
        const { drinks: drink } = await response.json();
        setCategoryDrink(drink);
      } catch (error) {
        return error;
      }
    }

    getCategorysDrink();
  }, []);

  return (
    <>
      <Header title="Drinks" enableSearchButton />
      <div>
        <section>
          { categoryDrink.map((category, index) => (
            <button
              data-testid={ `${category.strCategory}-category-filter` }
              type="button"
              key={ index }
            >
              { category.strCategory }

            </button>
          )).slice(0, Number(magigNumber)) }
        </section>
        {
          drinks.map((item, i) => (
            <DrinkCard
              key={ item.idDrink }
              drink={ item }
              idTest={ i }
            />
          ))
        }
        ;
        {
          list.map((item, index) => (
            <DrinkCard
              key={ item.idDrink }
              drink={ item }
              idTest={ index }
            />
          ))
        }
      </div>
      <MenuBar />
    </>
  );
}
