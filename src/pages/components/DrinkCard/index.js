import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardS from './styled';

export default function DrinkCard(props) {
  const { drink, idTest, test } = props;
  const image = drink.strDrinkThumb || drink.image;
  const id = drink.idDrink || drink.id;
  const name = drink.strDrink || drink.name;
  return (
    <CardS data-testid={ `${idTest}-recipe-card` }>
      <Link to={ `/drinks/${id}` }>
        <img
          src={ image }
          alt={ name }
          data-testid={ `${idTest}-card-img` }
        />
        <h3 data-testid={ `${idTest}-${test}` }>{ name }</h3>
      </Link>
    </CardS>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    idDrink: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  idTest: PropTypes.number.isRequired,
  test: PropTypes.string.isRequired,
};
