import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export default function FoodCard(props) {
  const { food, idTest, test } = props;
  return (
    <CardS data-testid={ `${idTest}-recipe-card` }>
      <Link to={ `foods/${food.idMeal}` }>
        <img
          src={ food.strMealThumb }
          alt={ food.strMeal }
          data-testid={ `${idTest}-card-img` }
        />
        <h3 data-testid={ `${idTest}-${test}` }>{ food.strMeal }</h3>
      </Link>
    </CardS>
  );
}

FoodCard.propTypes = {
  food: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
  }).isRequired,
  idTest: PropTypes.number.isRequired,
  test: PropTypes.string.isRequired,
};
