import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Food from './pages/FoodPages/Food';
import FoodDetails from './pages/FoodPages/FoodDetails';
import FoodInProgress from './pages/FoodPages/FoodInProgress';
import Drinks from './pages/DrinkPages/Drinks';
import DrinkDetails from './pages/DrinkPages/DrinkDetails';
import DrinkInProgress from './pages/DrinkPages/DrinkInProgress';
import Explore from './pages/ExplorePages/Explore';
import ExploreFood from './pages/ExplorePages/ExploreFood';
import ExploreDrinks from './pages/ExplorePages/ExploreDrinks';
import ExploreIngredientsFoods from './pages/ExplorePages/ExploreIngredientsFoods';
import ExploreIngredientsDrinks from './pages/ExplorePages/ExploreIngredientsDrinks';
import ExploreNationalities from './pages/ExplorePages/ExploreNationalities';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  /* font-family: -apple-system, -apple-system; */
  /* color: #36100C */
}
body{
  background-color: #efefee;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Food } />
        <Route exact path="/foods/:id" component={ FoodDetails } />
        <Route exact path="/foods/:id/in-progress" component={ FoodInProgress } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/drinks/:id" component={ DrinkDetails } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinkInProgress } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFood } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreIngredientsFoods }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreIngredientsDrinks }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreNationalities }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </>
  );
}

export default App;
