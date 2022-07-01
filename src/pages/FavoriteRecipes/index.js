import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getFavoriteRecipes } from '../../services/localStorage';
import FavoritesCard from '../components/FavoritesCard';
import FavoriteStyled from './styled';

export default function FavoriteRecipes() {
  const [favoriteList, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const savedRecipe = getFavoriteRecipes() || [];
    setFavoriteRecipes(savedRecipe);
  }, []);

  const filterFoods = () => {
    const savedRecipe = getFavoriteRecipes() || [];

    const foodList = savedRecipe.filter(({ type }) => type === 'food');
    setFavoriteRecipes(foodList);
  };

  const filterDrinks = () => {
    const savedRecipe = getFavoriteRecipes() || [];

    const drinkList = savedRecipe.filter(({ type }) => type === 'drink');
    setFavoriteRecipes(drinkList);
  };

  const returnFavorites = () => {
    const savedRecipe = getFavoriteRecipes() || [];
    setFavoriteRecipes(savedRecipe);
  };

  return (
    <FavoriteStyled>
      <Header title="Favorite Recipes" />
      <div id="filter">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ returnFavorites }
        >
          all
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ filterFoods }

        >
          food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ filterDrinks }
        >
          drink
        </button>
      </div>
      <section id="favorite">
        {favoriteList.map((recipe, index) => (
          <FavoritesCard
            key={ index }
            index={ index }
            recipe={ recipe }
            setList={ setFavoriteRecipes }
          />
        ))}
      </section>
    </FavoriteStyled>
  );
}
