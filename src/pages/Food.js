import React from 'react';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

export default function Food() {
  return (
    <>
      <Header title="Foods" enableSearchButton />
      <div>Food</div>
      <MenuBar />
    </>
  );
}
