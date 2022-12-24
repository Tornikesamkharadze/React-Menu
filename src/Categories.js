import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((menu, index) => {
        return (
          <button
            className="filter-btn"
            type="text"
            onClick={() => filterItems(menu)}
            key={index}
          >
            {menu}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
