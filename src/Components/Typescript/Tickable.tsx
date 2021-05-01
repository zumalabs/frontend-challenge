import { FC } from 'react';
// 🐸 Operation Bullfrog🐸

interface Tickable {
  value: string;
}

const TickableTS: FC<Tickable> = ({ value }) => {
  return <span className="displayValue">{value}</span>;
};

export default TickableTS;
