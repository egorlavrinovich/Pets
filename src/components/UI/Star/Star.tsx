import React from "react";
import { useState } from "react";
import Svg from "../Svg/Svg";
const Star = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={`star-mark${active ? "-active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <Svg type="star" />
      </div>
    </>
  );
};

export default Star;
