import Svg from "../../../UI/Svg/Svg";
import { useState } from "react";
import Star from "../../../UI/Star/Star";
import GoodsCounter from "../../../UI/GoodsCounter/GoodsCounter";
import CartItemPrice from "../CartItemPrice/CartItemPrice";

const CartItem = () => {
  const countStars = new Array(5).fill(""); // Количество звёзд
  const countAvailableRectangles = new Array(3).fill(""); // 3 блока доступности товара
  const catDryFood = [
    {
      name: "Purina PRO PLAN",
      url: "https://www.zootovar-spb.ru/images/13/29/132933.jpg",
      availableGoods: [
        {
          price: 5,
          weight: "1 кг",
          count: 2,
        },
        {
          price: 2.3,
          weight: "500 г",
          count: 12,
        },
      ],
      description:
        "DELICATE 7+ для кошек старше 7 лет с чувствительным пищеварением, с индейкой",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "Purina PRO PLAN",
      rating: {
        mark: 1,
        count: 0,
      },
    },
    {
      name: "GRANDORF",
      url: "https://www.zootovar-spb.ru/images/16/43/164340.jpg",
      availableGoods: [
        {
          price: 10,
          weight: "2 кг",
          count: 20,
        },
        {
          price: 4.5,
          weight: "200 г",
          count: 120,
        },
      ],
      description:
        "Rabbit & Brown Rice Sterilised кролик с бурым рисом для стерилизованных или пожилых кошек от 1 года",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "GRANDORF",
      rating: {
        mark: 2,
        count: 0,
      },
    },
    {
      name: "Royal Canin",
      url: "https://www.zootovar-spb.ru/images/29/97/299769.jpg",
      availableGoods: [
        {
          price: 25,
          weight: "10 кг",
          count: 5,
        },
        {
          price: 5,
          weight: "200 г",
          count: 132,
        },
      ],
      description:
        "Gastro Intestinal Moderate Calorie GIM35 (диета) с умеренным содержанием энергии для кошек при нарушении пищеварения",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "Royal Canin",
      rating: {
        mark: 3,
        count: 0,
      },
    },
    {
      name: "Purina PRO PLAN",
      url: "https://www.zootovar-spb.ru/images/13/29/132933.jpg",
      availableGoods: [
        {
          price: 8,
          weight: "1 кг",
          count: 2,
        },
        {
          price: 5,
          weight: "500 г",
          count: 12,
        },
      ],
      description:
        "DELICATE 7+ для кошек старше 7 лет с чувствительным пищеварением, с индейкой",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "Purina PRO PLAN",
      rating: {
        mark: 4,
        count: 0,
      },
    },
    {
      name: "GRANDORF",
      url: "https://www.zootovar-spb.ru/images/16/43/164340.jpg",
      availableGoods: [
        {
          price: 15,
          weight: "2 кг",
          count: 20,
        },
        {
          price: 4.3,
          weight: "200 г",
          count: 120,
        },
      ],
      description:
        "Rabbit & Brown Rice Sterilised кролик с бурым рисом для стерилизованных или пожилых кошек от 1 года",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "GRANDORF",
      rating: {
        mark: 5,
        count: 0,
      },
    },
    {
      name: "Royal Canin",
      url: "https://www.zootovar-spb.ru/images/29/97/299769.jpg",
      availableGoods: [
        {
          price: 50,
          weight: "10 кг",
          count: 5,
        },
        {
          price: 500,
          weight: "200 г",
          count: 132,
        },
      ],
      description:
        "Gastro Intestinal Moderate Calorie GIM35 (диета) с умеренным содержанием энергии для кошек при нарушении пищеварения",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      slaveCategory: "old",
      foodMaker: "Royal Canin",
      rating: {
        mark: 0,
        count: 0,
      },
    },
  ];
  const [goods, setGoods] = useState(catDryFood);

  function setFavoriteStar(index: any, itemIndex: any) {
    // Добавление звезд в массив товаров
    const objStar = {
      ...goods[itemIndex],
      ...{ rating: { ...goods[itemIndex]?.rating, mark: index } },
    };
    const starGoods = [
      ...goods.slice(0, itemIndex),
      objStar,
      ...goods.slice(itemIndex + 1, goods.length),
    ];
    setGoods(starGoods);
  }
  function setAvalaibleItems(countGoods: number) {
    // Функция вычисления количества товаров => определённое количество кирпичиков
    const map = {
      minimumGoods: ["available-minimum", "available-none", "available-none"],
      mediumGoods: ["available-medium", "available-medium", "available-none"],
      enoughGoods: ["available-much", "available-much", "available-much"],
    };
    switch (true) {
      case countGoods < 15:
        return map.minimumGoods;
      case countGoods > 15 && countGoods < 50:
        return map.mediumGoods;
      case countGoods > 50:
        return map.enoughGoods;
      default:
        return ["available-none", "available-none", "available-none"];
    }
  }
  function addGoodsToBasket(goods: any, count: any) {
    const choosedGoods = {};
  }
  return (
    <div className="cart-item-block">
      {goods?.map((item: any, itemIndex) => (
        <div className="cart-item" key={itemIndex}>
          <div className="cart-item-image">
            <img src={item.url} alt="Картинка" />
          </div>
          <div className="cart-item-name">{item?.name}</div>
          <div className="cart-item-description">{item?.description}</div>
          <div className="cart-item-available-items">
            {item?.availableGoods?.map((option: any, index: number) => (
              <div key={Date.now() + index}>
                <CartItemPrice
                  option={option}
                  countAvailableRectangles={countAvailableRectangles}
                  setAvalaibleItems={setAvalaibleItems}
                />
              </div>
            ))}
            <div className="star-block">
              <div className="star-block-review">
                Отзывы: {item?.rating?.count}
              </div>
              <div className="star-block-rating">
                <div className="star-block-rating-star">
                  {countStars?.map((_, index: any) => {
                    // Выбор количества звёзд
                    if (item?.rating?.mark >= index) {
                      return (
                        <div onClick={() => setFavoriteStar(index, itemIndex)}>
                          <Star index={index} mark="favorite" />
                        </div>
                      );
                    } else {
                      return (
                        <div onClick={() => setFavoriteStar(index, itemIndex)}>
                          <Star index={index} mark="" />
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="star-block-rating-mark">
                  Рейтинг: {item?.rating?.mark + 1}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
