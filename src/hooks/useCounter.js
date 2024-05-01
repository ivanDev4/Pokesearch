import { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (val = 1) => {
    setCounter(counter + val);
  };

  const decrement = (val = 1) => {
    setCounter(counter - val);
    0;
  };

  const reset = (val) => {
    setCounter(val);
  };

  return {
    counter,
    increment,
    decrement,
    setCounter,
    reset,
  };
};

export default useCounter;
