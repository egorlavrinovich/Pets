import React from "react";

interface IAnymalFilter {
  // Разобраться с интерфейсом
  categoriesFilter: any[];
}

const AnimalTypeFilter = (filterCategories: any) => {
  //Разобраться с пропсами
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
  return (
    <div className="anymal-filter-block">
      <div className="filterTitle">
        <h3>Сухой корм для кошек</h3>
      </div>

      <div className="filter-block-items">
        {filterCats.map((item: any) => (
          <div className="filter-item">
            <div className="filter-item-image">
              <img src={item?.url} alt="filterImage" />
            </div>
            <div className="filter-item-name">{item?.filterName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalTypeFilter;
