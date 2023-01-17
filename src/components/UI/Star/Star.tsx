import React from "react";
import { useState } from "react";
import Svg from "../Svg/Svg";
const Star = ({ setCountStars, index, star }: any) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={`star-mark${star === "choosed" ? "-active" : ""}`}
        onClick={() => {
          setActive(!active);
          setCountStars(index);
        }}
      >
        <Svg type="star" />
      </div>
    </>
  );
};

export default Star;
