const TickableJS = ({ value, previousValue }) => { 
  const differenceInValue = value - previousValue;
  const percentageDifference = previousValue !== '0' ? Math.round(Math.abs(value - previousValue) / previousValue * 10000) / 100 : '0.00';

  const signToShow = differenceInValue > 0 ? '+' : '';
  const classToAdd = differenceInValue > 0 ? 'positive-ticker' : differenceInValue < 0 ? 'negative-ticker' : 'no-change-ticker';

  return (
    <div>
        <span> {value} </span>
        <span> {signToShow + differenceInValue} </span>
        <span> {`(${percentageDifference}%)`} </span>
    </div>
  );
}

export default TickableJS;