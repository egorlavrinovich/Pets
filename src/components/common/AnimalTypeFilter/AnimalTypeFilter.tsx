import React from "react";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../../hooks/Reduxhooks";
import Svg from "../../UI/Svg/Svg";
import AnymalItemFilter from "./AnymalItemFilter";
import { addFoodCategories } from "../../../Redux/FilterSlice";
interface IAnymalFilter {
  // Разобраться с интерфейсом
  categoriesFilter: any[];
}

const AnimalTypeFilter = (filterCategories: any) => {
  //Разобраться с пропсами
  const [active, setactive] = useState<boolean>(true);
  const [choosedGeneralCategoryId, setChoosedGeneralCategoryId] =
    useState<number>(0); // Выбираем категорию фильтра
  const [choosedSlaveCategory, setChoosedSlaveCategory] = useState<string>(""); // Выбираем подкатегорию фильтра
  const filterCatsCategories = [
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

  const dispatch = useAppDispatch();

  function inditificateCategory(url: string) {
    const choosedCategoryId = filterCatsCategories.findIndex(
      (item) => item.url === url
    );
    setChoosedGeneralCategoryId(choosedCategoryId);
  }
  useEffect(() => {
    dispatch(
      addFoodCategories([
        {
          animalCategory:
            filterCatsCategories[choosedGeneralCategoryId].animalCategory,
          generalNameCategory:
            filterCatsCategories[choosedGeneralCategoryId].generalNameCategory,
          slaveCategory: choosedSlaveCategory,
        },
      ])
    );
  }, [choosedSlaveCategory]); // Добавление критерий для фильтра еды
  return (
    <div className="anymal-filter-block" key={Date.now()}>
      <div className="filter-block-items">
        {filterCatsCategories.map((item: any) => (
          <div key={item.url} onClick={() => inditificateCategory(item.url)}>
            {active && (
              <AnymalItemFilter
                active={active}
                setactive={setactive}
                categories={item}
              />
            )}
          </div>
        ))}
        <>
          {!active && (
            <>
              <div className="name-category">
                {filterCatsCategories[choosedGeneralCategoryId].filterName}
              </div>
              <div onClick={() => setactive(!active)} className="arrow-back">
                <Svg type="arrowBack" />
              </div>
            </>
          )}
          {!active &&
            filterCatsCategories[
              choosedGeneralCategoryId
            ].dependsCategories.map(
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
