import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';
import FoodCard from '../components/FoodCard';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';

const ListStyle = styled.section`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
width: auto;
height: auto;
section{
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: auto;
  height: auto;
}
`;

const FoodStyle = styled.section`
display: flex;
flex-direction: column;

align-items: center;
width: 100vw;
height: 100vh;

`;

export default function Food() {
  const { list, getFoods, setList, foods } = useContext(AppContext);
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
      <ListStyle>
        <div>
          { categoryFood.map((category, index) => (
            <button
              data-testid={ `${category.strCategory}-category-filter` }
              type="button"
              key={ index }
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
      </ListStyle>
      <MenuBar />
    </FoodStyle>
  );
}
