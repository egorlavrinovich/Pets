import React from "react";
import { useState } from "react";
import Svg from "../Svg/Svg";
const Star = ({ index, mark }: any) => {
  return (
    <>
      <div className={`star-mark${mark === "favorite" ? "-active" : ""}`}>
        <Svg type="star" />
      </div>
    </>
  );
};

export default Star;
