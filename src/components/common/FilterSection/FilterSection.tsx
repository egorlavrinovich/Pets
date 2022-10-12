import React from "react";
import InputCategories from "../../UI/Input/InputCategories/InputCategories";
import InputRange from "../../UI/Input/InputRange/InputRange";

const FilterSection = () => {
  const categories = ["Котята", ""];
  return (
    <div className="filter-wrapper-brands">
      <InputRange />
      <InputCategories />
    </div>
  );
};

export default FilterSection;
