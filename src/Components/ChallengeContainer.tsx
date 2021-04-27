import { useState, useRef, useEffect } from "react";
import TypescriptTickable from './Typescript/Tickable';
import JavascriptTickable from './Javascript/Tickable';
import useInterval from "../Hooks/useInterval";
import './ChallengeContainer.css';

const ChallengeContainer = () => { 
  const [value, setValue] = useState<string>('0');
  const previousValRef = useRef<string>('0');
  useEffect(() => {
    previousValRef.current = value;
  }, [value]);

  const [tickSpeed, setTickSpeed] = useState<number>(5000);

  useInterval(() => { 
    setValue((Math.random() * 1000).toFixed(0));
  }, tickSpeed)

  return (
    <div className={'challengeContainerWrapper'}>
      <div className={'challengeContainer'}>
        <img alt={'logo'} className={'logo'} src={'https://testing.venetian.zuma.dev/static/media/logo.60893f15.svg'} />
        <div className={'tickables'}>
          <JavascriptTickable value={value} previousValue={previousValRef.current}/>
          <TypescriptTickable value={value} />
        </div>
        <div className={'tickSpeedControlContainer'}>
          <div className={'tickSpeedControlLabelContainer'}>
            <label>1s</label>
            <label>Tick Speed</label>
            <label>10s</label>
          </div>
          <input className={'tickSpeedControl'} type={'range'} min={1000} max={10000} onChange={(e) => setTickSpeed(parseInt(e.target.value))}/>
        </div>
      </div>
    </div>
  );
}

export default ChallengeContainer;