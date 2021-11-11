import React, { useState } from "react";
import "../App.css";

function ChangeNum() {
  const [startNum, setStartNum] = useState(0);
  const decrementHandler = () => {
    setStartNum((prevStartNum) => prevStartNum - 1);
  };
  const incrementHandler = () => {
    setStartNum((prevStartNum) => prevStartNum + 1);
  };
  return (
    <div className="main-div">
      <button onClick={decrementHandler} className="decr-btn">
        -
      </button>
      <div className="visual">
        <h1 className="heading">{startNum}</h1>
      </div>
      <button onClick={incrementHandler} className="incr-btn">
        +
      </button>
    </div>
  );
}

export default ChangeNum;
