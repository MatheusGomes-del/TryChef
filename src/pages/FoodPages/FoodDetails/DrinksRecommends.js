import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import DrinkCard from '../../components/DrinkCard';

const SliderStyle = styled.div`
margin: 9px;

.slick-slider {
  margin-bottom: 80px;
}
`;

export default function DrinksRecommends(props) {
  const { drinksList } = props;
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <SliderStyle>
      <Slider { ...settings }>
        {drinksList.map((drink, index2) => (
          <div key={ index2 } data-testid={ `${index2}-recomendation-card` }>

            <DrinkCard
              key={ index2 }
              drink={ drink }
              idTest={ index2 }
              test="recomendation-title"
            />
          </div>

        ))}
      </Slider>
    </SliderStyle>
  );
}

DrinksRecommends.propTypes = {
  drinksList: Proptypes.arrayOf(Proptypes.objectOf).isRequired,
};
