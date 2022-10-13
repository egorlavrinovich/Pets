import React from "react";
import InputCategories from "../../UI/Input/InputCategories/InputCategories";
import InputRange from "../../UI/Input/InputRange/InputRange";

const FilterSection = () => {
  const categoriesOfProduct = {
    filterName: "Производитель",
    filterCategory: [
      "Orijen",
      "Hill's",
      "Optimeal",
      "Acana",
      "Royal Canin",
      "Brit Premium",
      "KiteKat",
      "Felix",
      "Whiskas",
    ],
  };
  return (
    <div className="filter-wrapper-brands">
      <InputRange />
      <InputCategories categories={categoriesOfProduct} />
      <InputCategories categories={categoriesOfProduct} />
      <InputCategories categories={categoriesOfProduct} />
      <InputCategories categories={categoriesOfProduct} />
      <InputCategories categories={categoriesOfProduct} />
    </div>
  );
};

export default FilterSection;
