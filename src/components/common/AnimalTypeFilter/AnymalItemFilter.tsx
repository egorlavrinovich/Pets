import React from "react";

const AnymalItemFilter = (props: any) => {
  return (
    <div
      className="filter-item-block"
      key={props.categories.filterName}
      onClick={() => {
        if (props.setactive) props.setactive(!props.active);
        if (props.setChoosedSlaveCategory)
          props.setChoosedSlaveCategory(props.categories.slaveCategory);
      }}
    >
      <div className="filter-item-image">
        <img src={props.categories.url} alt="filterImage" />
      </div>
      <div className="filter-item-name">{props.categories.filterName}</div>
    </div>
  );
};

export default AnymalItemFilter;
