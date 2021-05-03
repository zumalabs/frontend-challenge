import { useRef, useEffect, useState } from "react";
import "./Tickable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const TickableJS = ({ value }) => {
  //Using ref to track previous values
  const prevValue = useRef(value);
  //Setting classname in state
  const [higherlower, setHigherlower] = useState("");
  //Icons
  const up = <FontAwesomeIcon icon={faArrowUp} size="1x" />;
  const down = <FontAwesomeIcon icon={faArrowDown} size="1x" />;

  //Handle the change value and reset to rest
  const handleChange = (change) => {
    setHigherlower(change);
    const reset = setTimeout(() => {
      setHigherlower("");
    }, 800);
    return reset;
  };

  //Get class name by comparing the change value
  const getChange = (previousVal, newVal) => {
    if (previousVal < newVal) {
      return "up";
    } else if (previousVal > newVal) {
      return "down";
    }
    return "";
  };

  useEffect(() => {
    const change = getChange(parseInt(prevValue.current), parseInt(value));
    const reset = handleChange(change);
    //Save the new value
    prevValue.current = value;
    //Clear the timer
    return () => clearTimeout(reset);
  }, [value]);

  return (
    <div data-testid="ticker" className={`ticker ${higherlower}`}>
      {higherlower ? (
        <span className="emoji">{higherlower === "up" ? up : down}</span>
      ) : null}
      <span data-testid="value">{value}</span>
      {higherlower ? (
        <span className="emoji">{higherlower === "up" ? up : down}</span>
      ) : null}
    </div>
  );
};

export default TickableJS;
