import React from 'react';
import ReactDOM from 'react-dom';
import TickableJS from './Tickable';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer'


// cleans up tests after completion to be able to run multiple tests of the same type correctly
afterEach(cleanup)

// testing if component renders correctly
it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TickableJS></TickableJS>, div)
})
// passed

// testing if the value from ChallengeContainer is passed down correctly to TickableJS
it('p tag recieves ticker value', () => {
  const { getByTestId } = render(<TickableJS value="100"></TickableJS>)
  expect(getByTestId('ticker')).toHaveTextContent('100')
})
// passed

// testing if the value from ChallengeContainer is passed down correctly to TickableJS #2
it('p tag recieves ticker value #2', () => {
  const { getByTestId } = render(<TickableJS value="500"></TickableJS>)
  expect(getByTestId('ticker')).toHaveTextContent('500')
})
// passed

// snapshots to store and compare changes in tests
it('matches snapshot', () => {
  const tree = renderer.create(<TickableJS value="300"></TickableJS>).toJSON();
  expect(tree).toMatchSnapshot();
})
// passed




