import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DoneCard from './styled';
import ShareButton from '../ShareButton';

export default function DoneRecipeCard(props) {
  const { index, recipe } = props;
  const { id, image, name, nationality, category, alcoholicOrNot, type,
    doneDate, tags } = recipe;

  const link = type === 'food' ? 'foods' : 'drinks';

  return (
    <DoneCard key={ index }>
      <Link to={ `/${link}/${id}` }>
        <img
          id="image"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
      </Link>
      <p id="category" data-testid={ `${index}-horizontal-top-text` }>
        {type === 'food' ? `${nationality} - ${category}` : `${alcoholicOrNot}`}
      </p>
      <Link id="nameRecipe" to={ `/${link}/${id}` }>
        <h3 data-testid={ `${index}-horizontal-name` }>{ name }</h3>
      </Link>
      <ShareButton id={ id } type={ link } index={ index } done />
      <p id="data" data-testid={ `${index}-horizontal-done-date` }>
        { doneDate }
      </p>
      <section>
        { tags.map((tag) => (
          <p data-testid={ `${index}-${tag}-horizontal-tag` } key={ tag }>
            { tag }
          </p>
        ))}
      </section>
    </DoneCard>
  );
}

DoneRecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.shape.isRequired).isRequired,
  index: PropTypes.number.isRequired,
};
