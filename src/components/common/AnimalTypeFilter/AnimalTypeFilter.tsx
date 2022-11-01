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
  const [choosedCategory, setChoosedCategory] = useState<number>(0);
  const filterCatsCategories = [
    {
      url: "https://www.zootovar-spb.ru//images/10/58/105823.jpg",
      filterName: "Сухие корма",
      dependsCategories: [
        {
          url: "https://www.zootovar-spb.ru//images/22/51/22510.jpg",
          filterName: "Взрослые(1-6 лет)",
        },
        {
          url: "https://www.zootovar-spb.ru//images/25/71/25716.jpg",
          filterName: "Котята и Беременные кошки",
        },
        {
          url: "https://www.zootovar-spb.ru//images/22/50/22509.jpg",
          filterName: "Пожилые 7+",
        },
        {
          url: "https://www.zootovar-spb.ru//images/25/71/25715.jpg",
          filterName: "Диета",
        },
        {
          url: "https://www.zootovar-spb.ru//images/22/50/22506.jpg",
          filterName: "Молоко для котят",
        },
      ],
    },
    {
      url: "https://www.zootovar-spb.ru//images/10/64/106414.jpg",
      filterName: "Консервы",
      dependsCategories: [
        {
          url: "https://www.zootovar-spb.ru//images/22/51/22510.jpg",
          filterName: "Взрослые(1-6 лет)",
        },
        {
          url: "https://www.zootovar-spb.ru//images/25/71/25716.jpg",
          filterName: "Котята и Беременные кошки",
        },
        {
          url: "https://www.zootovar-spb.ru//images/22/50/22509.jpg",
          filterName: "Пожилые 7+",
        },
        {
          url: "https://www.zootovar-spb.ru//images/25/71/25715.jpg",
          filterName: "Диета",
        },
      ],
    },
  ];
  function inditificateCategory(url: string) {
    setChoosedCategory(
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
                {filterCatsCategories[choosedCategory].filterName}
              </div>
              <div onClick={() => setactive(!active)} className="arrow-back">
                <Svg type="arrowBack" />
              </div>
            </>
          )}
          {!active &&
            filterCatsCategories[choosedCategory].dependsCategories.map(
              (items: any) => (
                <AnymalItemFilter active={active} categories={items} />
              )
            )}
        </>
      </div>
    </div>
  );
};

export default AnimalTypeFilter;
