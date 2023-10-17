import React, { useState } from "react";
import "./ComplexStateHandler.css";
import Counter from "./Counter";
import State from "./State";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

export default function ComplexStateHandler() {
  const [state, setState] = useState(initialState);

  const increment = (id) => {
    const updatedSate = state.map((value) => {
      if (value.id === id) {
        return {
          ...value,
          count: value.count + 1,
        };
      }
      return { ...value };
    });
    setState(updatedSate);
  };
  const decrement = (id) => {
    const updatedSate = state.map((value) => {
      if (value.id === id) {
        return {
          ...value,
          count: value.count - 1,
        };
      }
      return { ...value };
    });
    setState(updatedSate);
  };

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };
  return (
    <div className="main">
      {state.map((count) => (
        <Counter
          key={count.id}
          id={count.id}
          count={count.count}
          increment={increment}
          decrement={decrement}
        />
      ))}
      <State count={totalCount()} />
    </div>
  );
}
