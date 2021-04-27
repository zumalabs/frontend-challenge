import { useEffect, useRef } from 'react';
  
export default function usePrevious(value: string) {
  const perviousValue = useRef<any>();

  useEffect(() => {
    perviousValue.current = value;
  });

  return perviousValue.current;
}