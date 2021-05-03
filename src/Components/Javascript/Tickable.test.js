import React from "react";
import ReactDOM from "react-dom";
import TickableJS from "./Tickable";
import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TickableJS></TickableJS>, div);
});

it("Renders the value", () => {
  const { getByTestId } = render(<TickableJS value="666"></TickableJS>);
  expect(getByTestId("value")).toHaveTextContent("666");
});

it("Has a resting state", () => {
    const value = '55'
    const { getByTestId } = render(<TickableJS value={value}></TickableJS>)
    expect(getByTestId('ticker')).not.toHaveClass('up');
    expect(getByTestId('ticker')).not.toHaveClass('down');
});


it('Highlights increment values and returns class to rest state.', async () => {
    const firstValue = '7';
    const secondValue = '42';
    const { rerender, getByTestId } = render(<TickableJS value={firstValue} />);
    expect(getByTestId('ticker')).not.toHaveClass('up')
    expect(getByTestId('ticker')).not.toHaveClass('down');
    rerender(<TickableJS value={secondValue} />);
    const tickerElement = await getByTestId('ticker')
    expect(tickerElement).toHaveClass('up')
    await waitFor(() => {
        expect(tickerElement).not.toHaveClass('up')})
  });

  it('Highlights decrement values and returns class to rest state.', async () => {
    const firstValue = '99';
    const secondValue = '50';
    const { rerender, getByTestId } = render(<TickableJS value={firstValue} />);
    expect(getByTestId('ticker')).not.toHaveClass('up')
    expect(getByTestId('ticker')).not.toHaveClass('down');
    rerender(<TickableJS value={secondValue} />);
    const tickerElement = await getByTestId('ticker')
    expect(tickerElement).toHaveClass('down')
    await waitFor(() => {
        expect(tickerElement).not.toHaveClass('down')})
  });