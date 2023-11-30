import AnymalItemFilter from "../AnymalItemFilter";
import Svg from "../../../UI/Svg/Svg";

interface DependedFilterCategoriesProps {
  active: boolean;
  choosedGeneralCategory: any;
  setChoosedSlaveCategory: any;
  setActive: any;
}

const DependedFilterCategories = (props: DependedFilterCategoriesProps) => {
  const { active, choosedGeneralCategory, setChoosedSlaveCategory, setActive } =
    props;

  return (
    <>
      {!active && (
        <>
          <div onClick={() => setActive(!active)} className="arrow-back">
            <Svg type="arrowBack" />
          </div>
          {choosedGeneralCategory?.map(
            // Логика работы раздельного фильтра
            (items: any) => (
              <div key={items.filterName} className="filter-item">
                <AnymalItemFilter
                  active={active}
                  categories={items}
                  setChoosedSlaveCategory={setChoosedSlaveCategory}
                />
              </div>
            )
          )}
        </>
      )}
    </>
  );
};

export default DependedFilterCategories;
