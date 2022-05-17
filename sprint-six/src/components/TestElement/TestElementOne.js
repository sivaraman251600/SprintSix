import React, { useState } from "react";
import "./Testelement.css"

const TestElementOne = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const subtractHandler = () => {
    setCounter(counter - inputValue);
  };

  const addHandler = () => {
    setCounter(Number(inputValue) + counter);
  };

  return (
    <div>
      <h1 data-testid="header">My Test State</h1>
      <button data-testid="buttonCheck">Add Name</button>
      <h1 data-testid="displayValue" className={`${counter >= 100 ? 'green' : ''}${counter <= 0 ? 'red' : ''}`}>{counter}</h1>
      <button data-testid="subtract-btn" onClick={subtractHandler}>
        -
      </button>
      <input
        data-testid="input-value"
        id="inputValue"
        type={"number"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button data-testid="add-btn" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default TestElementOne;
