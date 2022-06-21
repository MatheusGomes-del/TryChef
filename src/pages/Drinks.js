import React, { useContext } from 'react';
import Header from './components/Header';
import AppContext from '../context/AppContext';
import DrinkCard from './components/DrinkCard';
import MenuBar from './components/MenuBar';

export default function Drinks() {
  const { list } = useContext(AppContext);
  const { drinks } = useContext(AppContext);
  console.log(drinks);

  return (
    <>
      <Header title="Drinks" enableSearchButton />
      <div>
        {
          drinks.map((item, i) => (
            <DrinkCard
              key={ item.idDrink }
              drink={ item }
              idTest={ i }
            />
          ))
        }
        ;
        {
          list.map((item, index) => (
            <DrinkCard
              key={ item.idDrink }
              drink={ item }
              idTest={ index }
            />
          ))
        }
      </div>
      <MenuBar />
    </>
  );
}
