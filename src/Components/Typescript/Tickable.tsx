import { FC, useRef, useEffect, useState } from 'react';
import { getHighlight, HighlightState } from './getHighlight';
import './Tickable.css';
// 🐸 Operation Bullfrog🐸

interface Tickable {
  value: string;
}

const TickableTS: FC<Tickable> = ({ value }) => {
  // Use savedValue to track previous values through the render cycle.
  const savedValue = useRef(parseInt(value));
  // Handling className changes in our mighty Ticker
  const [highlight, setHighlight] = useState<HighlightState>('');
  const emojiUp = '🐸🐸🐸';
  const emojiDown = '😈';

  const handleHighlight = (highlight: HighlightState):NodeJS.Timeout => {
    setHighlight(highlight);
    const timer = setTimeout(() => {
      setHighlight('');
    }, 800);
    return timer
  };

  useEffect(() => {
    const prevValue = savedValue.current;
    const nextValue = parseInt(value);
    const highlight = getHighlight(prevValue, nextValue);
    const timer = handleHighlight(highlight);
    // Setting ref for the next render to access
    savedValue.current = parseInt(value);
    // Cleaning up the timeout function - Jest was flagging a memory leak.
    return () => clearTimeout(timer)

  }, [value]);

  return (
    <div className={`ticker ${highlight}`}>
      {value}
      {highlight && (
        <p className='emoji'>
          {highlight === 'increment' ? emojiUp : emojiDown}
        </p>
      )}
    </div>
  );
};

export default TickableTS;
