import { FC } from "react";

interface Tickable { 
  value: string;
}

const TickableTS: FC<Tickable> = ({ value }) => { 
  return <div>{`Hello World ${value}`}</div>;
}

export default TickableTS;
