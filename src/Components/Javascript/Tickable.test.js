import React from 'react';
import { render, screen } from '@testing-library/react';
import TickableJS from './Tickable';

test('The current value label is rendered', () => {
  render(<TickableJS />);
  const linkElement = screen.getByText("Current Value:");
  expect(linkElement).toBeInTheDocument();
});