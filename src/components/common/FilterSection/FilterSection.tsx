import React from "react";
import InputCategories from "../../UI/Input/InputCategories/InputCategories";
import InputRange from "../../UI/Input/InputRange/InputRange";

const FilterSection = () => {
  const categoriesOfProduct = {
    typeFilter: "foodMaker",
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
  const popularityOfProduct = {
    typeFilter: "Popular",
    filterName: "Популярное",
    filterCategory: ["Felix", "Whiskas"],
  };
  return (
    <div className="filter-wrapper-brands">
      <InputRange />
      <InputCategories categories={categoriesOfProduct} />
      <InputCategories categories={popularityOfProduct} />
    </div>
  );
};

export default FilterSection;
