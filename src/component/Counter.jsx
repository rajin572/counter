import React, { useState } from "react";
import Button from "./Button";

export default function Counter({ id, count, increment, decrement }) {
  return (
    <div className="couter-box">
      <h2 className="counter">{count}</h2>
      <div className="btn-container">
        <Button
          handler={() => increment(id)}
          lebel={"Increment"}
          disabled={false}
        />
        <Button
          handler={() => decrement(id)}
          lebel={"Decrement"}
          disabled={count === 0}
        />
      </div>
    </div>
  );
}
