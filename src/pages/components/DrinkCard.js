import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardS = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 150px;
  height: 150px;
  margin: 2vh;
  img{
    width: 100%;
  }
`;

export default function DrinkCard(props) {
  const { drink, idTest } = props;
  console.log(idTest);
  console.log(drink);
  return (
    <CardS data-testid={ `${idTest}-recipe-card` }>
      <img
        src={ drink.strDrinkThumb }
        alt={ drink.strDrink }
        data-testid={ `${idTest}-card-img` }
      />
      <h3 data-testid={ `${idTest}-card-name` }>{ drink.strDrink }</h3>
    </CardS>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.objectOf(
    PropTypes.shape({
      strDrink: PropTypes.string.isRequired,
      strDrinkThumb: PropTypes.string.isRequired,
    }),
  ).isRequired,
  idTest: PropTypes.string.isRequired,
};
