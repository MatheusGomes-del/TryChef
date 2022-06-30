import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardS from './styled';

export default function DrinkCard(props) {
  const { drink, idTest, test } = props;
  return (
    <CardS data-testid={ `${idTest}-recipe-card` }>
      <Link to={ `/drinks/${drink?.idDrink}` }>
        <img
          src={ drink?.strDrinkThumb }
          alt={ drink?.strDrink }
          data-testid={ `${idTest}-card-img` }
        />
        <h3 data-testid={ `${idTest}-${test}` }>{ drink?.strDrink }</h3>
      </Link>
    </CardS>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    idDrink: PropTypes.string.isRequired,
  }).isRequired,
  idTest: PropTypes.number.isRequired,
  test: PropTypes.string.isRequired,
};
