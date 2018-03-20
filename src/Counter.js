import React from "react";
import { buttonStyle } from "./styles";

const Counter = ({ count, onIncrement, onDecrement }) => (
  <div>
    <img
      style={{ height: 150, width: 150 }}
      src="https://officedepot.scene7.com/is/image/officedepot/295033_scene7?$OD-Large$&wid=450&hei=450"
    />
    <h1>Current Count: {count}</h1>
    <span style={buttonStyle} onClick={onIncrement}>
      Increment
    </span>
    <span style={buttonStyle} onClick={onDecrement}>
      Decrement
    </span>
  </div>
);

export default Counter;
