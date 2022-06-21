import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';

function BarraDeBusca() {
  const { inputSearch, handleInputSearch, getList, typeFilter,
    handleInputType, list } = useContext(AppContext);
  const { pathname } = useLocation();
  const history = useHistory();

  const getUrlType = () => {
    if (pathname.includes('foods')) {
      return 'themealdb';
    }
    return 'thecocktaildb';
  };

  const getType = () => {
    if (pathname.includes('foods')) {
      return 'foods';
    }
    return 'drinks';
  };

  if (list.length === 1) {
    const typeRoute = getType();
    history.push(`/${typeRoute}/${list[0].idMeal || list[0].idDrink}`);
  }

  return (
    <form>
      <label htmlFor="input-search">
        <input
          type="text"
          id="input-search"
          data-testid="search-input"
          value={ inputSearch }
          onChange={ handleInputSearch }
        />
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => getList({
            api: getUrlType(),
            type: typeFilter,
            value: inputSearch }) }
        >
          Search
        </button>
      </label>
      <label htmlFor="input-radio">
        Ingrediente
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="typeFilter"
          value="Ingrediente"
          onClick={ handleInputType }
        />
        Name
        <input
          type="radio"
          data-testid="name-search-radio"
          name="typeFilter"
          value="Name"
          onClick={ handleInputType }
        />
        First Letter
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="typeFilter"
          value="First Letter"
          onClick={ handleInputType }
        />
      </label>
    </form>
  );
}

export default BarraDeBusca;
