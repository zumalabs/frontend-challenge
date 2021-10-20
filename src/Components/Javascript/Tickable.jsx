import usePrevious from "../../Hooks/usePrevious";

const TickableJS = ({ value }) => { 

  const previousValue = usePrevious(value)

  return (
    <>
      <p>Current Value: {value}</p>
      <p>Previous Value: {previousValue}</p>
    </>
  );
}

export default TickableJS;