import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input";
import { useDispatch } from "react-redux";
import { addfilterCategories } from "../../../../Redux/FilterSlice";
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
  const dispatch = useDispatch();

  const [filterCategory, setFilterCategory] = useState<any>([]); // Выбранные категории пользователем

  function pushCategories(e: ChangeEvent<HTMLInputElement>) {
    // Ф-ция для удаления дубликатов в массиве
    if (filterCategory.includes(e.target.value)) {
      const filteredArr = filterCategory.filter(
        (item: string) => item !== e.target.value
      );
      setFilterCategory(filteredArr);
    } else setFilterCategory([...filterCategory, e.target.value]);
    dispatch(addfilterCategories(filterCategory));
  }

  return (
    <div className="categories-goods">
      <h5>Производители товара</h5>
      {categories.map((item) => {
        return (
          <div className="categories-food" key={item}>
            <Input
              value={item}
              type="checkbox"
              id="scales"
              name="scales"
              onChange={pushCategories}
            />
            <label htmlFor="scales">{item}</label>
          </div>
        );
      })}
    </div>
  );
};

export default InputCategories;
