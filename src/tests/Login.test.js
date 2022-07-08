import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

const emailDataTestID = 'email-input';
const passwordDataTestID = 'password-input';
const userEmail = 'grupovinteum@trybe.com';
const userPassword = '1234567';

describe('Testes da página Login', () => {
  it('Testa se há dois inputs na página e botão `ENTER`', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId(emailDataTestID);
    expect(inputEmail).toBeDefined();
    const inputPassword = screen.getByTestId(passwordDataTestID);
    expect(inputPassword).toBeDefined();
    const btnEnter = screen.getByRole('button', { name: /enter/i });
    expect(btnEnter).toBeDefined();
  });

  it('Testa se o input email funciona com um email válido', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId(emailDataTestID);
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, userEmail);
    expect(inputEmail).toHaveValue(userEmail);
  });

  it('Testa se o input password funciona com um password válido', () => {
    renderWithRouter(<App />);
    const inputPassword = screen.getByTestId(passwordDataTestID);
    expect(inputPassword).toHaveValue('');
    userEvent.type(inputPassword, userPassword);
    expect(inputPassword).toHaveValue(userPassword);
  });

  it('Testa se é salvo no localStorage dois tokens', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId(emailDataTestID);
    const inputPassword = screen.getByTestId(passwordDataTestID);
    const btnEnter = screen.getByRole('button', { name: /enter/i });
    userEvent.type(inputEmail, userEmail);
    userEvent.type(inputPassword, userPassword);
    userEvent.click(btnEnter);
    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
  });
});
