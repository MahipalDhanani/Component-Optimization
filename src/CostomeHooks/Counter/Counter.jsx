import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
