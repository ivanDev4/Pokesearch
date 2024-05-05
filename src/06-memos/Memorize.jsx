import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import {Small} from "./Small";

export default function Memorize() {
  const { counter, increment } = useCounter(10);
  const [memo, setmemo] = useState(true);

  return (
    <>
      <h2>
        Counter: <Small value={counter} />
      </h2>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => setmemo(!memo)}>toggel</button>
    </>
  );
}
