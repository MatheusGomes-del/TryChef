import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import FoodCard from './components/FoodCard';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

export default function Food() {
  const { list } = useContext(AppContext);

  return (
    <>
      <Header title="Foods" enableSearchButton />
      <div>
        { list.map((item, index) => (
          <FoodCard key={ item.idMeal } food={ item } idTest={ index } />
        ))}
      </div>
      <MenuBar />
    </>
  );
}
