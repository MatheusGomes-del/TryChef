import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../../images/drinkIcon.svg';
import mealIcon from '../../../images/mealIcon.svg';
import exploreIcon from '../../../images/exploreIcon.svg';
import FooterStyled from './style';

export default function MenuBar() {
  return (
    <FooterStyled data-testid="footer">

      <Link to="/drinks">
        <img src={ drinkIcon } alt="drinkIcon" data-testid="drinks-bottom-btn" />
      </Link>

      <Link to="/explore">
        <img src={ exploreIcon } alt="exploreIcon" data-testid="explore-bottom-btn" />
      </Link>

      <Link to="/foods">
        <img src={ mealIcon } alt="mealIcon" data-testid="food-bottom-btn" />
      </Link>

    </FooterStyled>
  );
}
