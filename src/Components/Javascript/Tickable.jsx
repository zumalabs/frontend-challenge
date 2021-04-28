import React, { useState, useEffect, useRef } from 'react';
import Alert from 'react-bootstrap/Alert' 

const TickableJS = ({value }) => { 

  const [newValue,setValue] = useState(null)

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const preValue = usePrevious(value)

  const displayValue = (preValue, value) => {
    if(preValue == undefined){
      return <h1> { value} </h1>
    }
    else if(value >= preValue){
      return <Alert variant={'success'}><h2>{value}</h2> </Alert>
    }
    else if (value <= preValue) {
      return <Alert variant ={'danger'}> <h1>{value}</h1> </Alert>
    }
  }


  return(
  <div> 
  {displayValue(preValue,value)}
  </div>
  )
}

export default TickableJS;
