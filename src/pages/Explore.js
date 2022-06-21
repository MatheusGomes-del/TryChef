import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

export default function Explore() {
  return (
    <>
      <Header title="Explore" />
      <div>
        <Link to="/explore/foods">
          <button
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </button>
        </Link>
      </div>
      <div>
        <Link to="/explore/drinks">
          <button
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </button>
        </Link>

      </div>
      <MenuBar />
    </>
  );
}
