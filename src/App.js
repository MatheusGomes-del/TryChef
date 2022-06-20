import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Food from './pages/Food';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Food } />
    </Switch>
  );
}

export default App;
