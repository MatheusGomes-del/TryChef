import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 200px;
  height: 150px;
  img{
    width: 100%;
  }
`;

export default function DrinkCard(props) {
  const { drink, idTest, test } = props;
  return (

    <CardS data-testid={ `${idTest}-recipe-card` }>
      <img
        src={ drink.strDrinkThumb }
        alt={ drink.strDrink }
        data-testid={ `${idTest}-card-img` }
      />
      <h3 data-testid={ `${idTest}-${test}` }>{ drink.strDrink }</h3>
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
  test: PropTypes.string.isRequired,
};
