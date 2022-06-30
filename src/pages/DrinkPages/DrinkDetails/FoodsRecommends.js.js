import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import FoodCard from '../../components/FoodCard';

const SliderStyle = styled.div`
margin: 9px;

.slick-slider {
  margin-bottom: 80px;
}
`;

export default function FoodsRecommends(props) {
  const { foodsList } = props;
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
        {foodsList.map((food, index2) => (
          <div key={ index2 } data-testid={ `${index2}-recomendation-card` }>

            <FoodCard
              key={ index2 }
              food={ food }
              idTest={ index2 }
              test="recomendation-title"
            />
          </div>

        ))}
      </Slider>
    </SliderStyle>
  );
}

FoodsRecommends.propTypes = {
  foodsList: Proptypes.arrayOf(Proptypes.shape.isRequired).isRequired,
};
