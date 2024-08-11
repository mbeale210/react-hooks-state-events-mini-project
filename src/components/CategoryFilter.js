import { useState } from "react";

const CategoryFilter = ({ categories, onFilterChange }) => {
  const [currentFilter, setCurrentFilter] = useState(categories[0]);

  const handleClick = (category) => {
    setCurrentFilter(category);
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
            className={props.filter === category ? "selected" : ""} // Accessing filter via props
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