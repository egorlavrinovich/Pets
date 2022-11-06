import React from "react";
import InputCategories from "../../UI/Input/InputCategories/InputCategories";
import InputRange from "../../UI/Input/InputRange/InputRange";

interface IFilterSectionItems {
  typeFilter: string;
  filterName: string;
  filterCategory: string[];
}
interface IFilterSection {
  sideBarFilterCategoriesItems: IFilterSectionItems[];
}

const FilterSection = ({ sideBarFilterCategoriesItems }: IFilterSection) => {
  return (
    <div className="filter-wrapper-brands">
      <InputRange />
      {sideBarFilterCategoriesItems.map((item) => (
        <InputCategories categories={item} key={item.typeFilter} />
      ))}
    </div>
  );
};

export default FilterSection;
