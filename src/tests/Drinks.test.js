import React from 'react';
import { getByTestId, screen } from '@testing-library/react';
import App from '../App';
// import renderWithContext from './helpers/renderWithContext';

describe('Testes da página Drinks', () => {
  it('Testa header da pag drinks', () => {
    const { history } = renderWithContext(<App />);
    history.push('/drinks');
    const profileImg = screen.getByAltText('profile');
    const profileTitle = screen.getByTestId('page-title');
    const searchImg = screen.getByAltText('search');
    expect(profileImg).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
    expect(searchImg).toBeInTheDocument();
  });

  it('Testa botao se botao all esta presente ao renderizar pag', () => {
    const { history } = renderWithContext(<App />);
    history.push('/123');
    const btnSearch = getByTestId('All-category-filter');
    expect(btnSearch).toBeDefined();
  });
});
