import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import FoodCard from './components/FoodCard';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

export default function Food() {
  const { list } = useContext(AppContext);
  const { foods } = useContext(AppContext);
  const [categoryFood, setCategoryFood] = useState([]);
  const [magigNumber] = useState('5');

  useEffect(() => {
    async function getCategorysFood() {
      try {
        const endopint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
        const response = await fetch(endopint);
        const { meals } = await response.json();
        setCategoryFood(meals);
      } catch (error) {
        return error;
      }
    }

    getCategorysFood();
  }, []);

  return (
    <>
      <Header title="Foods" enableSearchButton />
      <div>
        <section>
          { categoryFood.map((category, index) => (
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
          foods.map((item, i) => (
            <FoodCard key={ item.idMeal } food={ item } idTest={ i } />
          ))
        }
        {
          list.map((item, index) => (
            <FoodCard key={ item.idMeal } food={ item } idTest={ index } />
          ))
        }
      </div>
      <MenuBar />
    </>
  );
}
