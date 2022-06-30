import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../../context/AppContext';
import FoodCard from '../../components/FoodCard';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import FoodStyle from './styled';

export default function Food() {
  const {
    list, getFoods, setList, foods, setIgredient, igredient } = useContext(AppContext);
  const [categoryFood, setCategoryFood] = useState([]);
  const [magigNumber] = useState('5');
  const [toggle, setToggle] = useState(false);

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
    getFoods();
    getCategorysFood();

    if (igredient !== '') {
      const getByIgredient = async () => {
        try {
          const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${igredient}`;
          const response = await fetch(endpoint);
          const data = await response.json();
          let newList = data.meals;
          console.log(data.meals);
          const eleven = 11;
          if (data.meals.length > eleven) {
            const twelve = 12;
            newList = data.meals.slice(0, twelve);
          }
          setList(newList);
        } catch (error) {
          return error;
        }
      };
      getByIgredient();
      setIgredient('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function filterFood(param) {
    try {
      const endopint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`;
      const response = await fetch(endopint);
      const { meals } = await response.json();
      let newList = meals;
      const eleven = 11;
      if (meals.length > eleven) {
        const twelve = 12;
        newList = meals.slice(0, twelve);
      }
      setList(newList);
      setToggle(!toggle);
      if (!toggle === false && list[0].strMeal !== newList[0].strMeal) {
        setList(newList);
        setToggle(true);
      }
      if (!toggle === false && list[0].strMeal === newList[0].strMeal) {
        setList(foods);
        setToggle(!toggle);
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <FoodStyle>
      <Header title="Foods" enableSearchButton />
      <div>
        <div>
          { categoryFood.map((category, index) => (
            <button
              data-testid={ `${category.strCategory}-category-filter` }
              type="button"
              key={ index + 1 }
              onClick={ () => filterFood(category.strCategory) }
            >
              { category.strCategory }
            </button>
          )).slice(0, Number(magigNumber)) }
          <button
            data-testid="All-category-filter"
            type="button"
            onClick={ () => setList(foods) }
          >
            All
          </button>
        </div>
        <section>
          {
            list.map((item, indexList) => (
              <FoodCard
                key={ item.idMeal }
                food={ item }
                idTest={ indexList }
                test="card-name"
              />
            ))
          }
        </section>
      </div>
      <MenuBar />
    </FoodStyle>
  );
}
