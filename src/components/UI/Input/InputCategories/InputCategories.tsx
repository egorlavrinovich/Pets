import React, { ChangeEvent, useEffect, useState } from "react";
import Input from "../Input";
import { useDispatch } from "react-redux";
import { addfilterCategories } from "../../../../Redux/FilterSlice";

interface IInputCategories {
  categories: {
    typeFilter: string;
    filterName: string;
    filterCategory: string[];
  };
}

const InputCategories = (props: IInputCategories) => {
  const dispatch = useDispatch();

  const [filterCategory, setFilterCategory] = useState<any>([]); // Выбранные категории пользователем

  function pushCategories(e: ChangeEvent<HTMLInputElement>) {
    // Ф-ция для удаления дубликатов в массиве
    //@ts-ignore
    if (filterCategory.includes(e.target.value)) {
      const filteredArr = filterCategory.filter(
        (item: string) => item !== e.target.value
      );
      setFilterCategory(filteredArr);
    } else setFilterCategory([...filterCategory, e.target.value]);
    dispatch(
      addfilterCategories([props.categories.typeFilter, filterCategory])
    );
  }

  return (
    <div className="categories-goods">
      <h5>{props.categories.filterName}</h5>
      {props.categories.filterCategory.map((item) => {
        return (
          <div className="categories-food" key={item}>
            <label className="categories-food-label">
              <Input
                value={item}
                type="checkbox"
                id="categories"
                name="categories"
                onChange={pushCategories}
              />
              <div className="stlchek"></div>
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default InputCategories;
