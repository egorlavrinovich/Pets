import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AnymalItemFilter from "./AnymalItemFilter";
import DependedFilterCategories from "./DependedFilterCategories/DependedFilterCategories";

interface IAnymalFilter {
  namePage: any;
  filterCategories: any[];
}

const AnimalTypeFilter = ({ filterCategories }: IAnymalFilter) => {
  const [active, setActive] = useState<boolean>(true); // делаем окно видимым
  const [choosedGeneralCategory, setChoosedGeneralCategory] = useState<any>([]); // Выбираем категорию фильтра
  const [choosedSlaveCategory, setChoosedSlaveCategory] = useState<string>(""); // Выбираем подкатегорию фильтра

  const [currentCategory, setCurrentCategory] = useState<any>();

  const [animalCategories, setAnimalCategories] = useSearchParams();

  function inditificateCategory(url: string) {
    const choosedCategory = currentCategory.find(
      (item: any) => item?.url === url
    ); // Ф-ция поиска выбранной катеогрии для дальнейшего вывода подкатегории
    setAnimalCategories({
      ...Object.fromEntries(animalCategories),
      typeOfFood: choosedCategory?.generalNameCategory,
    });
  }

  useEffect(() => {
    const currentCategory = filterCategories?.filter(
      (category) =>
        category?.animalCategory === animalCategories.get("animalCategory")
    );
    setCurrentCategory(currentCategory);

    const findDependedCategory = currentCategory?.find(
      (item) => item?.generalNameCategory === animalCategories.get("typeOfFood")
    );

    if (findDependedCategory)
      setChoosedGeneralCategory(findDependedCategory?.dependsCategories);
  }, [animalCategories, filterCategories]);

  return (
    <div className="anymal-filter-block">
      <h2 className="filter-block-name">{currentCategory?.[0]?.namePage}</h2>
      <div className="filter-block-items">
        {currentCategory?.map((item: any) => (
          <div
            className={active ? "filter-item" : "filter-item-disable"}
            key={item.url}
            onClick={() => inditificateCategory(item.url)}
          >
            <AnymalItemFilter
              active={active}
              setactive={setActive}
              categories={item}
            />
          </div>
        ))}
        <>
          {!active && currentCategory.length && (
            <DependedFilterCategories
              key={Date.now()}
              active={active}
              choosedGeneralCategory={choosedGeneralCategory}
              setActive={setActive}
              setChoosedSlaveCategory={setChoosedSlaveCategory}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default AnimalTypeFilter;
