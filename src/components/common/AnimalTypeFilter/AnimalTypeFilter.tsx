import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useAppDispatch } from "../../../hooks/Reduxhooks";
import Svg from "../../UI/Svg/Svg";
import AnymalItemFilter from "./AnymalItemFilter";
import { addFoodCategories } from "../../../Redux/FilterSlice";
interface IAnymalFilter {
  // Разобраться с интерфейсом
  namePage: string;
  filterCategories: any[];
}

const AnimalTypeFilter = ({ namePage, filterCategories }: IAnymalFilter) => {
  //Разобраться с пропсами
  const [active, setactive] = useState<boolean>(true); // делаем окно видимым
  const [choosedGeneralCategoryId, setChoosedGeneralCategoryId] =
    useState<number>(0); // Выбираем категорию фильтра
  const [choosedSlaveCategory, setChoosedSlaveCategory] = useState<string>(""); // Выбираем подкатегорию фильтра

  function filterCategoryItemsNamePage(
    categoryItems: any[],
    nameCategory: string
  ) {
    return categoryItems.filter((item) => item.animalCategory === nameCategory);
  }
  const choosedPage = useMemo(() => {
    return filterCategoryItemsNamePage(filterCategories, namePage);
  }, [namePage]);

  const dispatch = useAppDispatch();

  function inditificateCategory(url: string) {
    const choosedCategoryId = choosedPage.findIndex((item) => item.url === url);
    setChoosedGeneralCategoryId(choosedCategoryId);
  }
  useEffect(() => {
    dispatch(
      addFoodCategories([
        {
          animalCategory: choosedPage[choosedGeneralCategoryId]?.animalCategory,
          generalNameCategory:
            choosedPage[choosedGeneralCategoryId]?.generalNameCategory,
          slaveCategory: choosedSlaveCategory,
        },
      ])
    );
  }, [choosedSlaveCategory]); // Добавление критерий для фильтра еды
  return (
    <div className="anymal-filter-block" key={Date.now()}>
      <div className="filter-block-items">
        {choosedPage.map((item: any) => (
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
                {choosedPage[choosedGeneralCategoryId].filterName}
              </div>
              <div onClick={() => setactive(!active)} className="arrow-back">
                <Svg type="arrowBack" />
              </div>
            </>
          )}
          {!active &&
            choosedPage[choosedGeneralCategoryId].dependsCategories.map(
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
