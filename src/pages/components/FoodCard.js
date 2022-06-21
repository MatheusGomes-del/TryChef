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

export default function FoodCard(props) {
  const { food, idTest } = props;
  return (
    <CardS data-testid={ `${idTest}-recipe-card` }>
      <img
        src={ food.strMealThumb }
        alt={ food.strMeal }
        data-testid={ `${idTest}-card-img` }
      />
      <h3 data-testid={ `${idTest}-card-name` }>{ food.strMeal }</h3>
    </CardS>
  );
}

FoodCard.propTypes = {
  food: PropTypes.objectOf(
    PropTypes.shape({
      strMeal: PropTypes.string.isRequired,
      strMealThumb: PropTypes.string.isRequired,
    }),
  ).isRequired,
  idTest: PropTypes.string.isRequired,
};
