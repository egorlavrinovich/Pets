import React, { useState, ChangeEvent } from "react";
import Svg from "../Svg/Svg";
const GoodsCounter = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="counter-block">
      <div
        className="counter-block-minus"
        onClick={() => setCount((x) => x - 1)}
      >
        {/* <Svg type="minus" /> */}-
      </div>
      <div className="counter-block-count">{count}</div>
      <div
        className="counter-block-plus"
        onClick={() => setCount((x) => x + 1)}
      >
        {/* <Svg type="plus" /> */}+
      </div>
    </div>
  );
};

export default GoodsCounter;
