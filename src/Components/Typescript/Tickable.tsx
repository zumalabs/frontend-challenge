import { FC } from "react";
import { Wrapper } from "./tickableStyles";
import usePrevious from "../../Hooks/usePrevious";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useSpring, animated } from "react-spring";

// 🐸

interface Tickable {
  value: string;
  tickRate: number;
  lowest: number;
  highest: number;
}

const TickableTS: FC<Tickable> = ({ value, tickRate, lowest, highest }) => {
  const prevNumber: string = usePrevious<string>(value);

  const animatedText = useSpring({
    val: +value,
    opacity: 1,
    config: { duration: tickRate / 2.5 },
    from: { val: +prevNumber, opacity: 0 },
  });

  const direction: string =
    value > prevNumber ? "up" : value < prevNumber ? "down" : "";

  return (
    <Wrapper>
      <div className={"highLowContainer"}>
        <p className={"highLowValue"}>{lowest}</p>
        <p className={"highLowTextHeader"}>LOW</p>
      </div>

      <div className="mainTextContainer">
        <animated.div className={`${direction} mainText`}>
          {animatedText.val.to((val: number) => Math.floor(Number(val)))}
        </animated.div>
        {/* <h1 className={direction}>{value}</h1> */}
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
