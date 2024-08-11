import React from "react";

const CategoryFilter = ({ categories, onFilterChange, currentFilter }) => {
  const handleClick = (category) => {
    onFilterChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={currentFilter === category ? "selected" : ""}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
