import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('The App page has rendered with the correct text', () => {
  render(<App />);
  const linkElement = screen.getByText("Tick Speed");
  expect(linkElement).toBeInTheDocument();
});
