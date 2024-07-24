import { useRef } from 'react';

const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const lastCall = useRef<number>(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  return (...args: any[]) => {
    const now = Date.now();
    const remainingTime = delay - (now - lastCall.current);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    if (remainingTime <= 0) {
      callback(...args);
      lastCall.current = now;
    } else {
      timeout.current = setTimeout(() => {
        callback(...args);
        lastCall.current = Date.now();
      }, remainingTime);
    }
  };
};

export default useThrottle;
