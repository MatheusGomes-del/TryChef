import React from 'react';

function BarraDeBusca() {
  return (
    <form>
      <label htmlFor="input-search">
        <input
          type="text"
          data-testid="exec-search-btn"
          id="input-search"
        />
      </label>
      <label htmlFor="input-radio">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="Ingrediente"
        />
        <input
          type="radio"
          data-testid="name-search-radio"
          name="Name"
        />
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="First Letter"
        />
      </label>
    </form>
  );
}

export default BarraDeBusca;
