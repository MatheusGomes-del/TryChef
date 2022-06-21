import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { getDoneRecipes } from '../services/localStorage';

export default function AppProvider({ children }) {
  const [inputSearch, setInputSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [list, setList] = useState([]);
  const [doneRecipes, setDoneRecipes] = useState([]);

  const recipesFinished = () => {
    const doneRecipesList = getDoneRecipes() || [];
    setDoneRecipes(doneRecipesList);
  };
  const [drinks, setDrinks] = useState([]);
  const [foods, setFoods] = useState([]);

  const handleInputSearch = ({ target }) => {
    setInputSearch(target.value);
  };

  const handleInputType = ({ target }) => {
    setTypeFilter(target.value);
  };

  function verifyValue({ api, type, value }) {
    switch (type) {
    case 'Ingrediente':
      return `https://www.${api}.com/api/json/v1/1/filter.php?i=${value}`;
    case 'Name':
      return `https://www.${api}.com/api/json/v1/1/search.php?s=${value}`;
    case 'First Letter':
      if (value.length > 1) {
        global.alert('Your search must have only 1 (one) character');
        setInputSearch('');
        return 0;
      }
      return `https://www.${api}.com/api/json/v1/1/search.php?f=${value}`;
    default:
      return false;
    }
  }

  async function getList(obj) {
    try {
      // console.log(obj);
      const url = verifyValue(obj);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const listData = data.meals || data.drinks || undefined;

      if (listData === undefined) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }

      let newList = listData;
      const eleven = 11;
      if (listData.length > eleven) {
        const twelve = 12;
        newList = listData.slice(0, twelve);
      }
      setList(newList);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    async function getDrinks() {
      try {
        const endopint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        const response = await fetch(endopint);
        const { drinks: array } = await response.json();

        let newListDrink = array;
        const eleven = 11;
        if (array.length > eleven) {
          const twelve = 12;
          newListDrink = array.slice(0, twelve);
        }
        setDrinks(newListDrink);
      } catch (error) {
        return error;
      }
    }

    async function getFoods() {
      try {
        const endopint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        const response = await fetch(endopint);
        const { meals: array } = await response.json();

        let newListFood = array;
        const eleven = 11;
        if (array.length > eleven) {
          const twelve = 12;
          newListFood = array.slice(0, twelve);
        }
        setFoods(newListFood);
      } catch (error) {
        return error;
      }
    }

    getFoods();
    getDrinks();
  }, []);

  const contextValue = {
    inputSearch,
    typeFilter,
    handleInputType,
    handleInputSearch,
    getList,
    list,
    doneRecipes,
    recipesFinished,
    foods,
    drinks,
  };
  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
