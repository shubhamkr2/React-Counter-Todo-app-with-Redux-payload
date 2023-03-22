import React from "react";
import { decrement, increment } from "../Redux/Counter/counter.action";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(1);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <input
        value={inputValue}
        type="number"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => dispatch(increment(+inputValue))}>+</button>
      <button
        disabled={count <= 0}
        onClick={() => dispatch(decrement(+inputValue))}
      >
        -
      </button>
    </div>
  );
}

export { Counter };
