import React, { useContext } from 'react';
import Header from './components/Header';
import AppContext from '../context/AppContext';
import DrinkCard from './components/DrinkCard';
import MenuBar from './components/MenuBar';

export default function Drinks() {
  const { list } = useContext(AppContext);

  return (
    <>
      <Header title="Drinks" enableSearchButton />
      <div>
        { list.map((item, index) => (
          <DrinkCard
            key={ item.idDrink }
            drink={ item }
            idTest={ index }
            test="card-name"
          />
        ))}
      </div>
      <MenuBar />
    </>
  );
}
