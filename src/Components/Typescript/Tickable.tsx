import { FC, useState, useEffect } from "react";
import "./Tickable.css";
import usePrevious from "../../Hooks/usePrevious";

// 🐸

interface Tickable {
  value: string;
}

const TickableTS: FC<Tickable> = ({ value }) => {
  const prevNumber: string = usePrevious<string>(value);

  console.log("VALUE and PREV: ", value, prevNumber);

  // const [direction, setDirection] = useState<string>("");

  // useEffect(() => {
  //   if (prevNumber > value) {
  //     setDirection("down");
  //   } else {
  //     setDirection("up");
  //   }
  // }, [prevNumber]);

  const direction =
    value > prevNumber ? "up" : value < prevNumber ? "down" : "";

  return (
    <div>
      <h2 className={direction}>{value}</h2>
    </div>
  );
};

export default TickableTS;
