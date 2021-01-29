import { useDebugValue, useEffect, useRef } from 'react';

const usePrevious = (value) => {
  const ref = useRef(0);

  useEffect(() => {
    ref.current = value;
  });

  useDebugValue(ref.current > 18 ? 'too much' : 'too little');

  return ref.current;
};

export default usePrevious;
