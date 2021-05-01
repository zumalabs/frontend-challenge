import { FC, useRef, useEffect, useState } from 'react';
import { getHighlight, HighlightState } from './getHighlight';
import './Tickable.css'
// 🐸 Operation Bullfrog🐸

interface Tickable {
  value: string;
}

const TickableTS: FC<Tickable> = ({ value }) => {
  // Use savedValue to track previous values through the render cycle.
  const savedValue = useRef(parseInt(value));
  // Handling className changes in our mighty Ticker
  const [highlight, setHighlight] = useState<HighlightState>('');

  const handleHighlight = (highlight:HighlightState) => {
    setHighlight(highlight);
    setInterval(() => {
      setHighlight('')
    }, 700)
  }

  useEffect(() => {
    const prevValue = savedValue.current;
    const nextValue = parseInt(value);
    const highlight = getHighlight(prevValue, nextValue);
    handleHighlight(highlight)
    // Setting ref for the next render to access
    savedValue.current = parseInt(value);

  }, [value]);

  return <span className={`displayValue ${highlight}`}>{value}</span>;
};

export default TickableTS;
