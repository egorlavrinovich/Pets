import React from "react";
import { useAppSelector } from "../../../hooks/Reduxhooks";
import AnimalTypeFilter from "../AnimalTypeFilter/AnimalTypeFilter";
import FilterSection from "../FilterSection/FilterSection";
import CartItem from "./CartItem/CartItem";
const Cart = () => {
  const choosedPage = useAppSelector((state) => state.categories);
  const filterCatsCategories1 = [
    {
      url: "https://www.zootovar-spb.ru//images/10/58/105823.jpg",
      filterName: "Сухие корма",
      namePage: "Товары для кошек",
      animalCategory: "cats",
      generalNameCategory: "dryFood",
      dependsCategories: [
        {
          url: "https://www.zootovar-spb.ru//images/22/51/22510.jpg",
          filterName: "Взрослые(1-6 лет)",
          slaveCategory: "adult",
        },
        {
          url: "https://www.zootovar-spb.ru//images/25/71/25716.jpg",
          filterName: "Котята и Беременные кошки",
          slaveCategory: "kittens",
        },
        {
          url: "https://www.zootovar-spb.ru//images/22/50/22509.jpg",
          filterName: "Пожилые 7+",
          slaveCategory: "old",
        },
        {
          url: "https://www.zootovar-spb.ru//images/25/71/25715.jpg",
          filterName: "Диета",
          slaveCategory: "diet",
        },
        {
          url: "https://www.zootovar-spb.ru//images/22/50/22506.jpg",
          filterName: "Молоко для котят",
          slaveCategory: "milk",
        },
      ],
    },
    {
      url: "https://www.zootovar-spb.ru//images/10/64/106414.jpg",
      filterName: "Консервы",
      namePage: "Товары для кошек",
      animalCategory: "cats",
      generalNameCategory: "cannedFood",
      dependsCategories: [
        {
          url: "https://www.zootovar-spb.ru//images/22/51/22510.jpg",
          filterName: "Взрослые(1-6 лет)",
          slaveCategory: "adult",
        },
        {
          url: "https://www.zootovar-spb.ru//images/25/71/25716.jpg",
          filterName: "Котята и Беременные кошки",
          slaveCategory: "kittens",
        },
        {
          url: "https://www.zootovar-spb.ru//images/22/50/22509.jpg",
          filterName: "Пожилые 7+",
          slaveCategory: "old",
        },
        {
          url: "https://www.zootovar-spb.ru//images/25/71/25715.jpg",
          filterName: "Диета",
          slaveCategory: "diet",
        },
      ],
    },
  ];
  const sideBarCategories = [
    {
      typeFilter: "foodMaker",
      filterName: "Производитель",
      filterCategory: [
        "Orijen",
        "Hill's",
        "Optimeal",
        "Acana",
        "Royal Canin",
        "Brit Premium",
        "KiteKat",
        "Felix",
        "Whiskas",
      ],
    },
    {
      typeFilter: "Popular",
      filterName: "Популярное",
      filterCategory: ["Felix", "Whiskas"],
    },
  ];
  return (
    <>
      <div className="filter-section">
        <FilterSection sideBarFilterCategoriesItems={sideBarCategories} />
      </div>
      <div className="page-section">
        <div className="cart">
          <AnimalTypeFilter
            filterCategories={filterCatsCategories1}
            namePage={choosedPage.choosedcategory}
          />
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default Cart;
