import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/Reduxhooks";
import { IMAGES_DISCOUNT } from "../../constants/contants";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { UseAdv } from "../../../hooks/UseAdv";
const Discount = React.memo(() => {
  const { activeImage, generateActiveImageMap } = UseAdv(
    IMAGES_DISCOUNT,
    "top-image"
  ); // кастомный хук для рекламного баннера
  const [activeblock, setactiveblock] = useState(true);

  const choosedCategory = useAppSelector(
    (state) => state.categories.choosedcategory
  );

  useEffect(() => {
    if (choosedCategory === "discount") setactiveblock(true);
    else setactiveblock(false);
  }, [choosedCategory]);

  return (
    <>
      {activeblock && (
        <div className="discount-wrapper">
          <div className="discount-block">
            <div onClick={generateActiveImageMap["left"]} className="left-but">
              <ArrowLeft />
            </div>
            <div className="top-image-block">
              <img
                className="top-image"
                src={IMAGES_DISCOUNT[activeImage]}
                alt="discountImage"
              />
            </div>
            <div
              onClick={generateActiveImageMap["right"]}
              className="right-but"
            >
              <ArrowRight />
            </div>
          </div>
          <div className="discount-goods">
            <h3>Акционные товары</h3>
          </div>
        </div>
      )}
    </>
  );
});

export default Discount;
