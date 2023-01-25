import React, { useState } from "react";
import GoodsCounter from "../../../UI/GoodsCounter/GoodsCounter";
import Svg from "../../../UI/Svg/Svg";
const CartItemPrice = ({
  option,
  countAvailableRectangles,
  setAvalaibleItems,
}: any) => {
  const [count, setCount] = useState(1);
  return (
    <div className="cart-item-available-items-block">
      <div className="cart-item-available-items-block-weight">
        <div className="cart-item-available-items-block-weight-value">
          {option?.weight}
        </div>
        <div className="cart-item-available-items-block-goods">
          {/* Мапим прямоугольники */}
          {countAvailableRectangles.length > 0 &&
            countAvailableRectangles?.map((_: any, index: number) => (
              <div className={setAvalaibleItems(option?.count)[index]}>
                <Svg type="available" />
              </div>
            ))}
        </div>
      </div>
      <div className="cart-item-available-items-block-counter">
        <GoodsCounter setCount={setCount} count={count} />
      </div>
      <div className="cart-item-available-items-block-price">
        {Math.floor(count * 100 * option?.price) / 100} р <Svg type="shop" />
      </div>
    </div>
  );
};

export default CartItemPrice;
