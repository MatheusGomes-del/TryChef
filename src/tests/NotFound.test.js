import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
// import renderWithContext from './helpers/renderWithContext';
/**
 * @jest-environment jsdom
 */

describe('Testa rota NOT FOUND', () => {
  it('Testa se a rota não for encontrada renderiza NOT FOUND', () => {
    const { history } = renderWithContext(<App />);
    history.push('/dri');
    const notFound = getByTestId('not-found');
    expect(notFound).toBeInTheDOcument();
    screen.debug();
  });
});
