import { FC, useRef, useEffect, useState } from 'react';
import { getHighlight, HighlightState } from './getHighlight';
import './Tickable.css';
// 🐸 Operation Bullfrog🐸
// BONUS: Choice of beverage was a San Pellegrino Clementine sparkling soft drink. 🍊

interface Tickable {
  value: string;
}

const TickableTS: FC<Tickable> = ({ value }) => {
  // Use savedValue to track previous values through the render cycle.
  const savedValue = useRef(value);
  // Handling className changes in our mighty Ticker
  const [highlight, setHighlight] = useState<HighlightState>('');
  const emojiUp = '🐸🐸🐸';
  const emojiDown = '😈';

  // Changing the className in highlight state, then sets an enterval to clear it back to rest.
  // returns a timer for useEffect cleanup.
  const handleHighlight = (highlight: HighlightState): NodeJS.Timeout => {
    setHighlight(highlight);
    const timer = setTimeout(() => {
      setHighlight('');
    }, 800);
    return timer;
  };

  useEffect(() => {
    const prevValue = parseInt(savedValue.current);
    const nextValue = parseInt(value);
    const highlight = getHighlight(prevValue, nextValue);
    const timer = handleHighlight(highlight);
    // Setting ref for the next render to access
    savedValue.current = value;
    // Cleaning up the timeout function - Jest was flagging a memory leak.
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className={`ticker ${highlight}`}>
      {value}
      {highlight ? (
        <p className='emoji'>
          {highlight === 'increment' ? emojiUp : emojiDown}
        </p>
      ) : (
        <p className='emoji'>⏲️</p>
      )}
    </div>
  );
};

export default TickableTS;
