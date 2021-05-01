import { FC } from 'react';
// 🐸 Operation Bullfrog🐸

interface Tickable {
  value: string;
}

const TickableTS: FC<Tickable> = ({ value }) => {
  return <span>{value}</span>;
};

export default TickableTS;
