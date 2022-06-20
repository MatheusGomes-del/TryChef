import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Food from './pages/Food';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFood from './pages/ExploreFood';
import ExploreDrinks from './pages/ExploreDrinks';
import Profile from './pages/Profile';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Food } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFood } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/explore/foods/ingredients" component={ ExploreFood } />
        <Route exact path="/explore/drinks/ingredients" component={ ExploreDrinks } />
        <Route exact path="/explore/foods/nationalities" component={ ExploreFood } />
        <Route exact path="/profile" component={ Profile } />
      </Switch>
    </>
  );
}

export default App;
