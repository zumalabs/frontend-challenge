// import React from 'react';
import { render, screen } from '@testing-library/react';
import Tickable from './Tickable';

// Set up acceptance criteria
describe('Tickable component', () => {
  test('should display the value, if value prop is passed', () => {
    const tickValue = '42';
    render(<Tickable value={tickValue} />);
    const displayValue = screen.getByText('42');
    expect(displayValue).toBeInTheDocument();
  });

  test('should have a resting state with no highlighting', () => {
    const tickValue = '42';
    render(<Tickable value={tickValue} />);
    const displayValue = screen.getByText('42');
    expect(displayValue).not.toHaveClass('increment');
    expect(displayValue).not.toHaveClass('decrement');
  });

  test('highlight should have an increment className as the value increments', async () => {
    const initialTickValue = '7';
    const { rerender } = render(<Tickable value={initialTickValue} />);
    const displayValue = screen.getByText('7');
    expect(displayValue).not.toHaveClass('increment')
    expect(displayValue).not.toHaveClass('decrement');
    const updatedTickValue = '42';
    rerender(<Tickable value={updatedTickValue} />);
    const updateDisplayValue = await screen.findByText('42')
    expect(updateDisplayValue).toHaveClass('increment')

    
  });

  test('should highlight decrements in the value', async () => {
    const initialTickValue = '52';
    const { rerender } = render(<Tickable value={initialTickValue} />);
    const displayValue = screen.getByText('52');
    expect(displayValue).not.toHaveClass('increment')
    expect(displayValue).not.toHaveClass('decrement');
    const updatedTickValue = '42';
    rerender(<Tickable value={updatedTickValue} />);
    const updateDisplayValue = await screen.findByText('42')
    expect(updateDisplayValue).toHaveClass('decrement')
  });
});
