import React from 'react';
import { render, screen } from '@testing-library/react';
import Tickable from './Tickable';

test('value should be displayed', () => {
  render(<Tickable value="500" />);
  expect(screen.getByText(/500/i)).toBeInTheDocument();
});

test('<i> tag should exist', () => {
  const { container } = render(<Tickable value="500" />);
  expect(container.querySelector('i')).toBeTruthy();
});

test('icon should be minus when rendered with same value, ', () => {
  const { container } = render(<Tickable value="500" />);
  expect(container.querySelector('i')!.className).toMatch('fa fa-minus');
});

test('color should be white when rerendered with same value, ', () => {
  const { rerender, container } = render(<Tickable value="500" />);
  rerender(<Tickable value="500" />);
  expect(container.querySelector('[color="white"]')).toBeTruthy();
});

test('color should be green when value increase', () => {
  const { rerender, container } = render(<Tickable value="500" />);
  rerender(<Tickable value="600" />);
  expect(container.querySelector('[color="green"]')).toBeTruthy();
});

test('color should be red when value decrease', () => {
  const { rerender, container } = render(<Tickable value="500" />);
  rerender(<Tickable value="400" />);
  expect(container.querySelector('[color="red"]')).toBeTruthy();
});