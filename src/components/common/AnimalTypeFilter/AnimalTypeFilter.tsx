import React from "react";
import { useState } from "react";
import Svg from "../../UI/Svg/Svg";
import AnymalItemFilter from "./AnymalItemFilter";
interface IAnymalFilter {
  // Разобраться с интерфейсом
  categoriesFilter: any[];
}

const AnimalTypeFilter = (filterCategories: any) => {
  //Разобраться с пропсами
  const [active, setactive] = useState<boolean>(true);
  const [choosedGeneralCategory, setChoosedGeneralCategory] =
    useState<number>(0); // Выбираем категорию фильтра
  const [choosedSlaveCategory, setChoosedSlaveCategory] = useState<string>(""); // Выбираем подкатегорию фильра
  const filterCatsCategories = [
    {
      url: "https://www.zootovar-spb.ru//images/10/58/105823.jpg",
      filterName: "Сухие корма",
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
  function inditificateCategory(url: string) {
    setChoosedGeneralCategory(
      filterCatsCategories.findIndex((item) => item.url === url)
    );
  }
  return (
    <div className="anymal-filter-block">
      <div className="filter-block-items">
        {filterCatsCategories.map((item: any) => (
          <>
            <div onClick={() => inditificateCategory(item.url)}>
              {active && (
                <AnymalItemFilter
                  active={active}
                  setactive={setactive}
                  categories={item}
                />
              )}
            </div>
          </>
        ))}
        <>
          {!active && (
            <>
              <div className="name-category">
                {filterCatsCategories[choosedGeneralCategory].filterName}
              </div>
              <div onClick={() => setactive(!active)} className="arrow-back">
                <Svg type="arrowBack" />
              </div>
            </>
          )}
          {!active &&
            filterCatsCategories[choosedGeneralCategory].dependsCategories.map(
              // Логика работы раздельного фильтра
              (items: any) => (
                <AnymalItemFilter
                  active={active}
                  categories={items}
                  setChoosedSlaveCategory={setChoosedSlaveCategory}
                />
              )
            )}
        </>
      </div>
    </div>
  );
};

export default AnimalTypeFilter;
