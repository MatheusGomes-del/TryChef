import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FoodCardStyled from './styled';

export default function FoodCard(props) {
  const { food, idTest, test } = props;
  return (
    <FoodCardStyled data-testid={ `${idTest}-recipe-card` }>
      <Link to={ `/foods/${food?.idMeal}` }>
        <img
          src={ food?.strMealThumb }
          alt={ food?.strMeal }
          data-testid={ `${idTest}-card-img` }
        />
        <h3 data-testid={ `${idTest}-${test}` }>{ food?.strMeal }</h3>
      </Link>
    </FoodCardStyled>
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
