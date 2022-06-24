import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import AppContext from '../../context/AppContext';
import DrinkCard from '../components/DrinkCard';
import MenuBar from '../components/MenuBar';

const ListStyle = styled.section`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
width: auto;
height: auto;
section{
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: auto;
  height: auto;
}
`;

const DrinkStyle = styled.section`
display: flex;
flex-direction: column;

align-items: center;
width: 100vw;
height: 100vh;

`;

export default function Drinks() {
  const {
    list,
    getDrinks, setList, drinks, igredient, setIgredient } = useContext(AppContext);
  const [categoryDrink, setCategoryDrink] = useState([]);
  const [magigNumber] = useState('5');
  const [toggle, setToggle] = useState(false);

  console.log(igredient);

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
    getDrinks();
    getCategorysDrink();

    if (igredient !== '') {
      const getByIgredient = async () => {
        try {
          const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${igredient}`;
          const response = await fetch(endpoint);
          const data = await response.json();
          let newList = data.drinks;
          console.log(data.drinks);
          const eleven = 11;
          if (data.drinks.length > eleven) {
            const twelve = 12;
            newList = data.drinks.slice(0, twelve);
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

  async function filterDrink(param) {
    try {
      const endopint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`;
      const response = await fetch(endopint);
      const { drinks: drink } = await response.json();
      let newList = drink;
      const eleven = 11;
      if (drink.length > eleven) {
        const twelve = 12;
        newList = drink.slice(0, twelve);
      }
      setList(newList);
      setToggle(!toggle);
      if (!toggle === false && list[0].idDrink !== newList[0].idDrink) {
        setList(newList);
        setToggle(true);
      }
      if (!toggle === false && list[0].idDrink === newList[0].idDrink) {
        setList(drinks);
        setToggle(!toggle);
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <DrinkStyle>
      <Header title="Drinks" enableSearchButton />
      <ListStyle>
        <div>
          { categoryDrink.map((category, index) => (
            <button
              data-testid={ `${category.strCategory}-category-filter` }
              type="button"
              key={ index }
              onClick={ () => filterDrink(category.strCategory) }
            >
              { category.strCategory }

            </button>
          )).slice(0, Number(magigNumber)) }
          <button
            data-testid="All-category-filter"
            type="button"
            onClick={ () => setList(drinks) }
          >
            All
          </button>
        </div>
        <section>
          {
            list.map((item, indexList) => (
              <DrinkCard
                key={ item.idDrink }
                drink={ item }
                idTest={ indexList }
                test="card-name"
              />
            ))
          }
        </section>
      </ListStyle>
      <MenuBar />
    </DrinkStyle>
  );
}
