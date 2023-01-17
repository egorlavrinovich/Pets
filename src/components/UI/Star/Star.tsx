import React from "react";
import { useState } from "react";
import Svg from "../Svg/Svg";
const Star = ({ index, mark }: any) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={`star-mark${mark === "favorite" ? "-active" : ""}`}
        onClick={() => {
          setActive(!active);
        }}
      >
        <Svg type="star" />
      </div>
    </>
  );
};

export default Star;
