import React from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { useSearchParams } from "react-router-dom";
import { UseAdv } from "../../../hooks/UseAdv";
import { IMAGES_DISCOUNT } from "../../constants/contants";
const Discount = React.memo(() => {
  const { activeImage, generateActiveImageMap } = UseAdv(
    IMAGES_DISCOUNT,
    "top-image"
  ); // кастомный хук для рекламного баннера
  const [activeFilter, _] = useSearchParams();
  const isActivePage = activeFilter.get("animalCategory") === "discount";
  return (
    <>
      {isActivePage && (
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
