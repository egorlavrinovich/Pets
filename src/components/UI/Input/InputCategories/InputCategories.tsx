import React from "react";

const InputCategories = () => {
  const categories = [
    "Orijen",
    "Hill's",
    "Optimeal",
    "Acana",
    "Royal Canin",
    "Brit Premium",
    "KiteKat",
    "Felix",
    "Whiskas",
  ];
  return (
    <div>
      {categories.map((item) => {
        return (
          <div className="categories-food" key={item}>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales">{item}</label>
          </div>
        );
      })}
    </div>
  );
};

export default InputCategories;
