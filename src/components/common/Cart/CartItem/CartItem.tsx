import React from "react";

const CartItem = () => {
  const catDryFood = [
    {
      name: "Purina PRO PLAN",
      url: "https://www.zootovar-spb.ru/images/13/29/132933.jpg",
      price: 650,
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
      price: 650,
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
      price: 550,
      description:
        "Gastro Intestinal Moderate Calorie GIM35 (диета) с умеренным содержанием энергии для кошек при нарушении пищеварения",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "Royal Canin",
    },
  ];
  return (
    <div className="cart-item-block">
      {catDryFood.map((item: any) => (
        <div className="cart-item">
          <div className="cart-item-image">
            <img src={item.url} alt="Картинка" />
          </div>
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-item-price">{item.price}</div>
          <div className="cart-item-description">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
