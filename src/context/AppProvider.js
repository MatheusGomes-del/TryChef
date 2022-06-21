import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [inputSearch, setInputSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [list, setList] = useState([]);

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

  const contextValue = {
    inputSearch,
    typeFilter,
    handleInputType,
    handleInputSearch,
    getList,
    list,
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
