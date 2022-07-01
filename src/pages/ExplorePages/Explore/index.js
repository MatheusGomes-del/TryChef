import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ExploreMain from './styled';

export default function Explore() {
  return (
    <ExploreMain>
      <Header title="Explore" />
      <section>
        <Link to="/explore/foods">
          <button
            type="button"
            data-testid="explore-foods"
          >
            Explore Foods
          </button>
        </Link>
        <Link to="/explore/drinks">
          <button
            type="button"
            data-testid="explore-drinks"
          >
            Explore Drinks
          </button>
        </Link>
      </section>
      <MenuBar />
    </ExploreMain>
  );
}
