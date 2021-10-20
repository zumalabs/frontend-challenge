import usePrevious from "../../Hooks/usePrevious";

const TickableJS = ({ value }) => { 

  const previousValue = usePrevious(value)

  const compareValues = () => {
    if (value > previousValue) {
      return <p style={{color: "green"}}>{value}</p>

    } else if (previousValue > value) {
      return <p style={{color: "red"}}>{value}</p>
    } else {
      return <p>{value}</p>
    }
  }

  return (
    <>
      <p>Current Value:</p> {compareValues()}
      <p>Previous Value: </p> 
      <p>{previousValue}</p>
    </>
  );
}

export default TickableJS;