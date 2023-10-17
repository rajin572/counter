import React from "react";

export default function Button({ lebel, handler, disabled }) {
  return (
    <button className="increment btn" onClick={handler} disabled={disabled}>
      {lebel}
    </button>
  );
}
