import { useState } from "react";
import TypescriptTickable from './Typescript/Tickable';
import JavascriptTickable from './Javascript/Tickable';
import useInterval from "../Hooks/useInterval";
import './ChallengeContainer.css';

const ChallengeContainer = () => {
  const [value, setValue] = useState<string>('0');
  const [tickSpeed, setTickSpeed] = useState<number>(3000);

  //! I changed the tick and input parameters, the was a minor bug when the input was in its initial value. 

  useInterval(() => {
    setValue((Math.random() * 1000).toFixed(0));
  }, tickSpeed)

  return (
    <div className={'challengeContainerWrapper'}>
      <div className={'challengeContainer'}>
        <img alt={'logo'} className={'logo'} src={'https://testing.venetian.zuma.dev/static/media/logo.60893f15.svg'} />
        <div className={'tickables'}>
          <JavascriptTickable value={value} />
          <TypescriptTickable value={value} />
        </div>
        <div className={'tickSpeedControlContainer'}>
          <div className={'tickSpeedControlLabelContainer'}>
            <label>3s</label>
            <label>Tick Speed</label>
            <label>10s</label>
          </div>
          <input className={'tickSpeedControl'} type={'range'} defaultValue={3000} min={3000} max={10000} onChange={(e) => setTickSpeed(parseInt(e.target.value))} />
        </div>
      </div>
    </div>
  );
}

export default ChallengeContainer;