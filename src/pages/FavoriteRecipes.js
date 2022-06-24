import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { getFavoriteRecipes } from '../services/localStorage';

import FavoritesCard from './components/FavoritesCard';

export default function FavoriteRecipes() {
  const [favoriteList, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const savedRecipe = getFavoriteRecipes() || [];
    setFavoriteRecipes(savedRecipe);
  }, []);

  const filterFoods = () => {
    const foodList = favoriteList.filter(({ type }) => type === 'food');
    setFavoriteRecipes(foodList);
  };

  const filterDrinks = () => {
    const drinkList = favoriteList.filter(({ type }) => type === 'drink');
    setFavoriteRecipes(drinkList);
  };

  const returnFavorites = () => {
    const savedRecipe = getFavoriteRecipes() || [];
    setFavoriteRecipes(savedRecipe);
  };

  return (
    <>
      <Header title="Favorite Recipes" />
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
      <div>
        {favoriteList.map((recipe, index) => (
          <FavoritesCard
            key={ index }
            index={ index }
            recipe={ recipe }
            setList={ setFavoriteRecipes }
          />
        ))}
      </div>
    </>
  );
}
