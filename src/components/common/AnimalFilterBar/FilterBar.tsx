import classNames from "classnames";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { ANIMAL_CATEGORIES } from "../../constants/contants";

const FilterBar: FC = () => {
  const [activeFilter, setActiveFilter] = useSearchParams();

  const setChoosedCategory = (animalCategory = "discount") =>
    setActiveFilter({ animalCategory });

  const isActiveCategory = (category: string) =>
    activeFilter.get("animalCategory") === category;

  return (
    <div className="wrapper-filter-bar">
      <div className="filter-bar">
        {ANIMAL_CATEGORIES.map((item, index) => (
          <div
            key={index}
            onClick={() => setChoosedCategory(item.route)}
            className={classNames(`${item.route}`, {
              active: isActiveCategory(item.route),
            })}
          >
            <div className="name">{item.name}</div>
            <div className="svg">
              <img src={item.imgUrl} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
