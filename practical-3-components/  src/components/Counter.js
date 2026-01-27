import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const boxStyle = {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px"
  };

  const btnStyle = {
    padding: "8px 12px",
    margin: "8px"
  };

  return (
    <div style={boxStyle}>
      <h2>Counter</h2>

      <button style={btnStyle} onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <h3>{count}</h3>

      <button style={btnStyle} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
