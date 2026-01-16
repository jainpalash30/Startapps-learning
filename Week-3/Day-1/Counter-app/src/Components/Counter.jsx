import { useState, useEffect } from "react";
import Display from "./Display";
import ButtonGroup from "./ButtonGroup";
import { keyboardShortcuts } from "../hooks/keyboardShortcuts";
import "../styles/counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return 0;
    });
  };

  const reset = () => {
    setCount(0);
  };

  keyboardShortcuts({
    onIncrement: increment,
    onDecrement: decrement,
    onReset: reset,
  });

  return (
    <div className="counter-Container">
      <div className="counter-device">
        <div className="indicator-light" />
        <Display value={count} />
        <ButtonGroup
          onIncrement={increment}
          onDecrement={decrement}
          onReset={reset}
        />
      </div>
    </div>
  );
}

export default Counter;
