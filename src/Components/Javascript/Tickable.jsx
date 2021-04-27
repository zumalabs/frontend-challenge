const TickableJS = ({ value, previousValue }) => { 
  const differenceInValue = value - previousValue;
  const percentageDifference = Math.round(value / previousValue * 100) / 100;

  const classToAdd = differenceInValue > 0 ? 'positive-ticker' : differenceInValue < 0 ? 'negative-ticker' : 'no-change-ticker';

  return (
    <div>
        <span> {value} </span>
        <span> {differenceInValue} </span>
        <span> {`(${percentageDifference}%)`} </span>
    </div>
  );
}

export default TickableJS;