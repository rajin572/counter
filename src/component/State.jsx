import React from "react";
import "./ComplexStateHandler.css";

export default function State({ count }) {
  const stateClass = count === 0 ? "Zerostate" : "Higherstate";
  return <div className={stateClass}>Total State {count}</div>;
}
