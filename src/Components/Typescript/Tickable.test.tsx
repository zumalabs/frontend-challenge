// import React from 'react';
import { render, screen } from '@testing-library/react';
import Tickable from './Tickable';

// Set up acceptance criteria
describe('Tickable component', () => {
  test('should display the value, if value prop is passed', () => {
    const tickValue = '17';
    render(<Tickable value={tickValue} />);
    const displayValue = screen.getByText('17');
    expect(displayValue).toBeInTheDocument();
  });

  // test('should have a resting state with no highlighting', () => {});

  // test('should highlight increments in the value', () => {});

  // test('should highlight decrements in the value', () => {});
});
