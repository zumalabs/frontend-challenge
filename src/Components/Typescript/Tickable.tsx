import { FC } from "react";
import { Wrapper } from "./tickableStyles";
import usePrevious from "../../Hooks/usePrevious";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

// 🐸

interface Tickable {
  value: string;
  tickRate: number;
  lowest: number;
  highest: number;
}

const TickableTS: FC<Tickable> = ({ value, tickRate, lowest, highest }) => {
  const prevNumber: string = usePrevious<string>(value);

  const direction: string =
    value > prevNumber ? "up" : value < prevNumber ? "down" : "";

  return (
    <Wrapper>
      <div className={"highLowContainer"}>
        <p className={"highLowValue"}>{lowest}</p>
        <p className={"highLowTextHeader"}>LOW</p>
      </div>

      <div className="mainTextContainer">
        <h1 className={direction}>{value}</h1>
        {direction === "up" ? (
          <IoMdArrowDropup className="icon" color="#73e84f" />
        ) : direction === "down" ? (
          <IoMdArrowDropdown className="icon" color="#ff4747" />
        ) : null}
      </div>

      <div className={"highLowContainer"}>
        <p className={"highLowValue"}>{highest}</p>
        <p className={"highLowTextHeader"}>HIGH</p>
      </div>
    </Wrapper>
  );
};

export default TickableTS;
