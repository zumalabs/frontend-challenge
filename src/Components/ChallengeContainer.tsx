import { useState } from "react";
import TypescriptTickable from "./Typescript/Tickable";
import JavascriptTickable from "./Javascript/Tickable";
import useInterval from "../Hooks/useInterval";
import "./ChallengeContainer.css";

const ChallengeContainer = () => {
  const [value, setValue] = useState<string>("0");
  const [tickSpeed, setTickSpeed] = useState<number>(5000);
  const [highest, setHighest] = useState<number>(0);
  const [lowest, setLowest] = useState<number>(0);

  function checkMinMax(val: string) {
    if (+val > +highest) {
      setHighest(+val);
    }

    if (+val < +lowest || value === "0") {
      setLowest(+val);
    }
  }

  useInterval(() => {
    const randomVal: string = (Math.random() * 1000).toFixed(0);
    checkMinMax(randomVal);
    setValue(randomVal);
  }, tickSpeed);

  const resetData = () => {
    setLowest(0);
    setHighest(0);
    setValue("0");
  };

  return (
    <div className={"challengeContainerWrapper"}>
      <div className={"challengeContainer"}>
        <button onClick={resetData} className={"clearDataButton"}>
          RESET DATA
        </button>
        <img
          alt={"logo"}
          className={"logo"}
          src={
            "https://testing.venetian.zuma.dev/static/media/logo.60893f15.svg"
          }
        />
        <div className={"tickables"}>
          <JavascriptTickable value={value} />
          <TypescriptTickable
            value={value}
            tickRate={tickSpeed}
            lowest={lowest}
            highest={highest}
          />
        </div>
        <div className={"tickSpeedControlContainer"}>
          <div className={"tickSpeedControlLabelContainer"}>
            <label>1s</label>
            <label>Tick Speed</label>
            <label>10s</label>
          </div>
          <input
            className={"tickSpeedControl"}
            type={"range"}
            min={1000}
            max={10000}
            onChange={(e) => setTickSpeed(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default ChallengeContainer;
