import { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styleTickable from './StyleTickable.js';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles(styleTickable);
let highlightTimer = false;

const TickableJS = ({ value }) => {
  const [noHighlight, setNoHighlight] = useState(true);

  const classes = useStyles();
  const prevValueRef = useRef();
  /// the value below is reference for prevValueRef because when noHighlight is set it picks up the new Value as its value
  const prevValueRefRef = useRef();
  let isIncrementing;

  useEffect(() => {
    prevValueRefRef.current = prevValueRef.current;
    if (highlightTimer) {
      clearTimeout(highlightTimer);
    }
    prevValueRef.current = value;
    /// render a timeout for when to remove the highlight
    highlightTimer = setTimeout(() => {
      setNoHighlight(true);
    }, 500);
    setNoHighlight(false);
  }, [value]);

  isIncrementing = checkIncrementDecrement(value, prevValueRefRef.current);

  return (
    <div className={classes.valueWrapper}>
      {highlightStyle(isIncrementing, classes, noHighlight).arrow}
      <div
        className={highlightStyle(isIncrementing, classes, noHighlight).value}
      >
        {value}
      </div>
      {highlightStyle(isIncrementing, classes, noHighlight).arrow}
    </div>
  );
};

/// this function is isolated as this is the main feature being able identify if the values are decrementing or  incrementing
const checkIncrementDecrement = (value, prevValue) => {
  let difference = value - prevValue;
  if (prevValue === undefined) {
    return undefined;
  } else if (!Object.is(Math.abs(difference), +difference)) {
    return false;
  } else {
    return true;
  }
};

/// this function return the className and the arrow icon depending on if it's incrementing or decrementing, also starts the timer
const highlightStyle = (isIncrementing, classes, noHighlight) => {
  if (isIncrementing === undefined || noHighlight) {
    return { value: '', arrow: '' };
  } else if (isIncrementing) {
    return { value: classes.incrementHighlight, arrow: <ArrowUpwardIcon /> };
  } else {
    return { value: classes.decrementHighlight, arrow: <ArrowDownwardIcon /> };
  }
};

export default TickableJS;
