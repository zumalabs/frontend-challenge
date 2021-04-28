import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render App component', () => {
  const { container } = render(<App />);
  expect(container.querySelector('div')!.className).toMatch('App');
});