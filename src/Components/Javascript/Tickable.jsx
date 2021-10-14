import { useState } from "react";
import useInterval from "../../Hooks/useInterval";

const TickableJS = ({ value, tickSpeed }) => {
  const [oldValue, setOldValue] = useState("0")

  useInterval(() => {
    setOldValue(value)
  }, tickSpeed - 200)

  const checkValue = () => { 
    if( oldValue > value){
    return <h1 style={{color:"red"}}>{value}</h1>
  } if(oldValue < value) {
    return <h1 style={{color:"green"}}>{value}</h1>
  }else {
    return <h1>{value}</h1>
  }
}

  return <div>{checkValue()}</div>

}

export default TickableJS;