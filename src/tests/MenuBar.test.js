import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testes Menu Inferior', () => {
  it('Testa se há dois inputs na página e botão `ENTER`', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const maxLength = 3;

    const buttons = screen.getAllByRole('link');
    expect(buttons).toHaveLength(maxLength);
  });

  it('Testa se há dois inputs na página e botão `ENTER`', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');

    const drinkBtn = screen.getByTestId('drinks-bottom-btn');
    expect(drinkBtn).toBeDefined();

    userEvent.click(drinkBtn);
    expect(history.location.pathname).toBe('/drinks');
  });

  it('Testa se o input email funciona com um email válido', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');

    const exploreBtn = screen.getByTestId('explore-bottom-btn');
    expect(exploreBtn).toBeDefined();
    userEvent.click(exploreBtn);
    expect(history.location.pathname).toBe('/explore');
  });

  it('Testa se o input password funciona com um password válido', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');

    const foodBtn = screen.getByTestId('food-bottom-btn');
    expect(foodBtn).toBeDefined();
    userEvent.click(foodBtn);
    expect(history.location.pathname).toBe('/foods');
  });
});
