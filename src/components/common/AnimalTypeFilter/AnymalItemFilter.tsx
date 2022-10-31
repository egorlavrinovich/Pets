import React from "react";

const AnymalItemFilter = ({ filterItems }: any) => {
  return (
    <>
      {filterItems.map((item: any) => (
        <div>
          <div>
            <img src={item?.url} alt="filterImage" />
          </div>
          <div>{item?.filterName}</div>
        </div>
      ))}
    </>
  );
};

export default AnymalItemFilter;
