import React from "react";
import Svg from "../../../UI/Svg/Svg";
import { useState } from "react";
import Star from "../../../UI/Star/Star";

const CartItem = () => {
  const [favoriteStar, setFavoriteStar] = useState(["", "", "", "", ""]);
  const catDryFood = [
    {
      name: "Purina PRO PLAN",
      url: "https://www.zootovar-spb.ru/images/13/29/132933.jpg",
      availableGoods: [
        {
          price: 5,
          weight: "1 кг",
          count: "2",
        },
        {
          price: 2.3,
          weight: "500 г",
          count: "12",
        },
      ],
      description:
        "DELICATE 7+ для кошек старше 7 лет с чувствительным пищеварением, с индейкой",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "Purina PRO PLAN",
    },
    {
      name: "GRANDORF",
      url: "https://www.zootovar-spb.ru/images/16/43/164340.jpg",
      availableGoods: [
        {
          price: 10,
          weight: "2 кг",
          count: "20",
        },
        {
          price: 4.5,
          weight: "200 г",
          count: "120",
        },
      ],
      description:
        "Rabbit & Brown Rice Sterilised кролик с бурым рисом для стерилизованных или пожилых кошек от 1 года",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "GRANDORF",
    },
    {
      name: "Royal Canin",
      url: "https://www.zootovar-spb.ru/images/29/97/299769.jpg",
      availableGoods: [
        {
          price: 25,
          weight: "10 кг",
          count: "5",
        },
        {
          price: 5,
          weight: "200 г",
          count: "132",
        },
      ],
      description:
        "Gastro Intestinal Moderate Calorie GIM35 (диета) с умеренным содержанием энергии для кошек при нарушении пищеварения",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "Royal Canin",
    },
    {
      name: "Purina PRO PLAN",
      url: "https://www.zootovar-spb.ru/images/13/29/132933.jpg",
      availableGoods: [
        {
          price: 8,
          weight: "1 кг",
          count: "2",
        },
        {
          price: 5,
          weight: "500 г",
          count: "12",
        },
      ],
      description:
        "DELICATE 7+ для кошек старше 7 лет с чувствительным пищеварением, с индейкой",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "Purina PRO PLAN",
    },
    {
      name: "GRANDORF",
      url: "https://www.zootovar-spb.ru/images/16/43/164340.jpg",
      availableGoods: [
        {
          price: 15,
          weight: "2 кг",
          count: "20",
        },
        {
          price: 4.3,
          weight: "200 г",
          count: "120",
        },
      ],
      description:
        "Rabbit & Brown Rice Sterilised кролик с бурым рисом для стерилизованных или пожилых кошек от 1 года",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "GRANDORF",
    },
    {
      name: "Royal Canin",
      url: "https://www.zootovar-spb.ru/images/29/97/299769.jpg",
      availableGoods: [
        {
          price: 50,
          weight: "10 кг",
          count: "5",
        },
        {
          price: 500,
          weight: "200 г",
          count: "132",
        },
      ],
      description:
        "Gastro Intestinal Moderate Calorie GIM35 (диета) с умеренным содержанием энергии для кошек при нарушении пищеварения",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "Royal Canin",
    },
  ];
  function setFavoritesStar(index: any) {
    const choosedStars = favoriteStar.map((item, i) =>
      i <= index ? (item = "choosed") : ""
    );
    setFavoriteStar(choosedStars);
  }
  return (
    <div className="cart-item-block">
      {catDryFood.map((item: any) => (
        <div className="cart-item">
          <div className="cart-item-image">
            <img src={item.url} alt="Картинка" />
          </div>
          <div className="cart-item-name">{item?.name}</div>
          <div className="cart-item-description">{item?.description}</div>
          <div className="cart-item-available-items">
            {item?.availableGoods.map((option: any) => (
              <div className="cart-item-available-items-block">
                <div className="cart-item-available-items-block-weight">
                  {option?.weight}
                </div>
                <div className="cart-item-available-items-block-price">
                  {option?.price} р <Svg type="shop" />
                </div>
              </div>
            ))}
          </div>
          {Array.isArray(favoriteStar) ? (
            favoriteStar.map((star: any, index: any) => (
              <Star
                setCountStars={setFavoritesStar}
                index={index}
                star={star}
              />
            ))
          ) : (
            <div>Nothing</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CartItem;
