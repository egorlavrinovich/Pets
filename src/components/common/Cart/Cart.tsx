import React from "react";
import { useAppSelector } from "../../../hooks/Reduxhooks";
import AnimalTypeFilter from "../AnimalTypeFilter/AnimalTypeFilter";
import FilterSection from "../FilterSection/FilterSection";
const Cart = () => {
  const choosedPage = useAppSelector(
    (state) => state.categories.choosedcategory
  );
  const filterCatsCategories1 = [
    {
      url: "https://www.zootovar-spb.ru//images/10/58/105823.jpg",
      filterName: "Сухие корма",
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
  return (
    <>
      <div className="filter-section">
        <FilterSection />
      </div>
      <div className="page-section">
        <div className="cart">
          <AnimalTypeFilter
            filterCategories={filterCatsCategories1}
            namePage={choosedPage}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
