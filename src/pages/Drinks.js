import React from 'react';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

export default function Drinks() {
  return (
    <div>
      <Header title="Drinks" enableSearchButton />
      Drinks
      <MenuBar />
    </div>
  );
}
