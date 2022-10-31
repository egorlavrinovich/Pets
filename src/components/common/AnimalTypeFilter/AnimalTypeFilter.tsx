import React from "react";
import { useState } from "react";
interface IAnymalFilter {
  // Разобраться с интерфейсом
  categoriesFilter: any[];
}

const AnimalTypeFilter = (filterCategories: any) => {
  //Разобраться с пропсами
  const [active, setactive] = useState<boolean>(true);
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
      ],
    },
  ];
  const filterCats = [
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
  ];
  console.log(active);
  return (
    <div className="anymal-filter-block">
      <div className="filterTitle"></div>
      <div className="filter-block-items">
        {filterCatsCategories.map((item: any) => (
          <>
            <div className="filter-item" onClick={() => setactive(!active)}>
              <div className="filter-item-image">
                <img src={item?.url} alt="filterImage" />
              </div>
              <div className="filter-item-name">{item?.filterName}</div>
            </div>
            {/* Разобраться с фильтром */}
            {/* <AnimalTypeFilter filterItems={item.dependsCategories} /> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default AnimalTypeFilter;
