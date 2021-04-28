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
  showDiff: boolean;
}

const TickableTS: FC<Tickable> = ({
  value,
  tickRate,
  lowest,
  highest,
  showDiff,
}) => {
  const prevNumber: string = usePrevious<string>(value);

  const animatedText = useSpring({
    opacity: 1,
    config: { duration: tickRate / 2.5 },
    from: { val: +prevNumber },
    to: { val: +value },
  });

  const direction: string =
    value > prevNumber ? "up" : value < prevNumber ? "down" : "";

  const difference: number = Number(value) - Number(prevNumber);

  return (
    <Wrapper>
      <div className={"highLowContainer"}>
        <p className={"highLowValue"}>{lowest}</p>
        <p className={"highLowTextHeader"}>LOW</p>
      </div>

      <div title={difference.toString()} className="mainTextContainer">
        <animated.div className={`${direction} mainText`}>
          {animatedText?.val.to((val: number) => Math.floor(val).toString())}
        </animated.div>
        {showDiff && !!difference && (
          <p className="differenceText">
            ({difference > 0 && "+"}
            {difference || ""})
          </p>
        )}

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
