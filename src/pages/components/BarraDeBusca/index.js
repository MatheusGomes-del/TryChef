import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import SearchStyled from './styled';

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
    <SearchStyled>
      <label htmlFor="input-search">
        <input
          type="text"
          id="input-search"
          placeholder="Search Recipe"
          data-testid="search-input"
          value={ inputSearch }
          onChange={ handleInputSearch }
        />

      </label>
      <section>
        <label htmlFor="radio-ingredient">
          Ingrediente
          <input
            id="radio-ingredient"
            type="radio"
            data-testid="ingredient-search-radio"
            name="typeFilter"
            value="Ingrediente"
            onClick={ handleInputType }
          />
        </label>
        <label htmlFor="radio-name">
          Name
          <input
            id="radio-name"
            type="radio"
            data-testid="name-search-radio"
            name="typeFilter"
            value="Name"
            onClick={ handleInputType }
          />
        </label>
        <label htmlFor="radio-firstLetter">
          First Letter
          <input
            id="radio-firstLetter"
            type="radio"
            data-testid="first-letter-search-radio"
            name="typeFilter"
            value="First Letter"
            onClick={ handleInputType }
          />
        </label>
      </section>
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
    </SearchStyled>
  );
}

export default BarraDeBusca;
