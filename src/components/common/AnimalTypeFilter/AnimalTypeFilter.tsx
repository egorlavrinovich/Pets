import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/Reduxhooks";
import Svg from "../../UI/Svg/Svg";
import AnymalItemFilter from "./AnymalItemFilter";
import { addFoodCategories } from "../../../Redux/FilterSlice";
interface IAnymalFilter {
  namePage: string;
  filterCategories: any[];
}

const AnimalTypeFilter = ({ namePage, filterCategories }: IAnymalFilter) => {
  const [active, setactive] = useState<boolean>(true); // делаем окно видимым
  const [pageName, setPageName] = useState<string>("");
  const [choosedGeneralCategoryId, setChoosedGeneralCategoryId] =
    useState<number>(0); // Выбираем категорию фильтра
  const [choosedSlaveCategory, setChoosedSlaveCategory] = useState<string>(""); // Выбираем подкатегорию фильтра
  const allCategories = useAppSelector((state) => state.categories.categories);

  function filterCategoryItemsNamePage(
    categoryItems: any[],
    nameCategory: string
  ) {
    return categoryItems.filter((item) => item.animalCategory === nameCategory); // Выполняют ф-цию фильтра категорий на странице
  }

  function findNamePage(arrCategories: any[], name: string) {
    // Ищем название страницы
    setPageName(
      arrCategories.find(
        (item) => item?.type === name && item?.type !== "discount"
      )?.name
    );
  }

  const choosedPage = useMemo(() => {
    findNamePage(allCategories, namePage);
    return filterCategoryItemsNamePage(filterCategories, namePage);
  }, [namePage, filterCategories, allCategories]);

  const dispatch = useAppDispatch();

  function inditificateCategory(url: string) {
    const choosedCategoryId = choosedPage.findIndex((item) => item.url === url); // Ф-ция поиска выбранной катеогрии для дальнейшего вывода подкатегории
    setChoosedGeneralCategoryId(choosedCategoryId);
  }

  useEffect(() => {
    dispatch(
      addFoodCategories([
        {
          animalCategory: choosedPage[choosedGeneralCategoryId]?.animalCategory, //Добавляем выбранные категории в стейт
          generalNameCategory:
            choosedPage[choosedGeneralCategoryId]?.generalNameCategory,
          slaveCategory: choosedSlaveCategory,
        },
      ])
    );
  }, [choosedSlaveCategory]); // Добавление критерий для фильтра еды
  return (
    <div className="anymal-filter-block">
      <h2 className="filter-block-name">{pageName}</h2>
      <div className="filter-block-items">
        {choosedPage.map((item: any) => (
          <div
            className="filter-item"
            key={item.url}
            onClick={() => inditificateCategory(item.url)}
          >
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
          {!active && !!choosedPage.length && (
            <>
              <div className="name-category">
                {choosedPage[choosedGeneralCategoryId]?.filterName}
              </div>
              <div onClick={() => setactive(!active)} className="arrow-back">
                <Svg type="arrowBack" />
              </div>
            </>
          )}
          {!active &&
            choosedPage[choosedGeneralCategoryId]?.dependsCategories.map(
              // Логика работы раздельного фильтра
              (items: any) => (
                <div key={items.url} className="filter-item">
                  <AnymalItemFilter
                    active={active}
                    categories={items}
                    setChoosedSlaveCategory={setChoosedSlaveCategory}
                  />
                </div>
              )
            )}
        </>
      </div>
    </div>
  );
};

export default AnimalTypeFilter;
