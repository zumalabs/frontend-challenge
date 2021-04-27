// 🐸🐸🐸🐸🐸🐸

import './Tickable.css';

const TickableJS = ({ value, previousValue }) => { 
  const differenceInValue = value - previousValue;
  const percentageDifference = previousValue !== '0' ? Math.round(Math.abs(value - previousValue) / previousValue * 10000) / 100 : '0.00';

  const signToShow = differenceInValue > 0 ? '+' : '';
  const classToAdd = differenceInValue > 0 ? 'positiveTicker' : differenceInValue < 0 ? 'negativeTicker' : '';

  return (
    <div className={"tickerWrapper"}>
      <div className={"tickerCurrentValue"}>
        {differenceInValue > 0 ? <span key={value} className={"arrowAnimation"}>&#8593;</span> : differenceInValue < 0 ? <span key={value} className={"arrowAnimation"}>&#8595;</span> : null}
        <span> {value} </span>
      </div>
      <div className={`tickerValueStats ${classToAdd}`}>
        <span> {signToShow + differenceInValue} </span>
        <span> {`(${percentageDifference}%)`} </span>
      </div>
    </div>
  );
}

export default TickableJS;