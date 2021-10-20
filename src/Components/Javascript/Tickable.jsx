import usePrevious from "../../Hooks/usePrevious";

const TickableJS = ({ value }) => { 

  const previousValue = usePrevious(value)

  const compareValues = () => {
    if (value > previousValue) {
      return <p style={{color: "lightgreen", fontWeight: "bold"}}>{value}</p>

    } else if (previousValue > value) {
      return <p style={{color: "red", fontWeight: "bold"}}>{value}</p>
    } else {
      return <p>{value}</p>
    }
  }

  return (
    <>
      <p>Current Value:</p> 
      {compareValues()}
      <p>Previous Value: </p> 
      <p>{previousValue}</p>
    </>
  );
}

export default TickableJS;