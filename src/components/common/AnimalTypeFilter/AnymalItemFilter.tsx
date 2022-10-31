import React from "react";

const AnymalItemFilter = (props: any) => {
  return (
    <div className="filter-item" onClick={() => props.setactive(!props.active)}>
      <div className="filter-item-image">
        <img src={props.categories.url} alt="filterImage" />
      </div>
      <div className="filter-item-name">{props.categories.filterName}</div>
    </div>
  );
};

export default AnymalItemFilter;
