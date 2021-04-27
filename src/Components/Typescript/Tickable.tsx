import { FC, useState, useEffect } from "react";
import "./Tickable.css";

// 🐸

interface Tickable {
  value: string;
}

const TickableTS: FC<Tickable> = ({ value }) => {
  const [preValue, setPrevValue] = useState<string>(value);
  const [direction, setDirection] = useState<string>("");

  useEffect(() => {
    if (preValue > value) {
      setDirection("down");
    } else {
      setDirection("up");
    }
  }, [value]);

  return (
    <div>
      <h2 className={direction}>{value}</h2>
    </div>
  );
};

export default TickableTS;
