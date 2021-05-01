// import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Tickable from './Tickable';

// Set up acceptance criteria
describe('Tickable component', () => {
  // "Your component must display the value"
  test('should display the value, if value prop is passed', () => {
    const tickValue = '42';
    render(<Tickable value={tickValue} />);
    const displayValue = screen.getByText('42');
    expect(displayValue).toBeInTheDocument();
  });

  // Your component must have resting state with no highlighting
  test('should have a resting state with no highlighting', () => {
    const tickValue = '42';
    render(<Tickable value={tickValue} />);
    const displayValue = screen.getByText('42');
    expect(displayValue).not.toHaveClass('increment');
    expect(displayValue).not.toHaveClass('decrement');
  });

  // Your component must highlight increments in the value
  test('should highlight incremented values. Finally, the classname is cleared.', async () => {
    const initialTickValue = '7';
    const { rerender } = render(<Tickable value={initialTickValue} />);
    const displayValue = screen.getByText('7');
    expect(displayValue).not.toHaveClass('increment')
    expect(displayValue).not.toHaveClass('decrement');
    const updatedTickValue = '42';
    rerender(<Tickable value={updatedTickValue} />);
    const updateDisplayValue = await screen.findByText('42')
    expect(updateDisplayValue).toHaveClass('increment')
    await waitFor(() => expect(updateDisplayValue).not.toHaveClass('increment'))
    
  });

  // Your component must highlight decrements in the value
  test('should highlight decrements in the value, then clear the highlight.', async () => {
    const initialTickValue = '52';
    const { rerender } = render(<Tickable value={initialTickValue} />);
    const displayValue = screen.getByText('52');
    expect(displayValue).not.toHaveClass('increment')
    expect(displayValue).not.toHaveClass('decrement');
    const updatedTickValue = '42';
    rerender(<Tickable value={updatedTickValue} />);
    const updateDisplayValue = await screen.findByText('42')
    expect(updateDisplayValue).toHaveClass('decrement')
    await waitFor(() => expect(updateDisplayValue).not.toHaveClass('decrement'))
  });
});
