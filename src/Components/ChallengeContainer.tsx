import { useState } from "react";
import TypescriptTickable from "./Typescript/Tickable";
import JavascriptTickable from "./Javascript/Tickable";
import useInterval from "../Hooks/useInterval";
import "./ChallengeContainer.css";

const ChallengeContainer = () => {
  const [value, setValue] = useState<string>("0");
  const [tickSpeed, setTickSpeed] = useState<number>(1000);
  const [highest, setHighest] = useState<number>(0);
  const [lowest, setLowest] = useState<number>(0);
  const [showDifference, setShowDifference] = useState<boolean>(true);

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
        <div className={"btnGroupContainer"}>
          <button
            onClick={() => setShowDifference(!showDifference)}
            className={"showDiffBtn btn"}
          >
            {!showDifference ? "SHOW DIFF" : "HIDE DIFF"}
          </button>
          <button onClick={resetData} className={"clearDataButton btn"}>
            RESET DATA
          </button>
        </div>

        <img
          alt={"logo"}
          className={"logo"}
          src={
            "https://testing.venetian.zuma.dev/static/media/logo.60893f15.svg"
          }
        />
        <div className={"tickables"}>
          <TypescriptTickable
            value={value}
            tickRate={tickSpeed}
            lowest={lowest}
            highest={highest}
            showDiff={showDifference}
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
