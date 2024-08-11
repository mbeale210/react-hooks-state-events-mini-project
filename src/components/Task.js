import React from "react";

const Task = ({ text, category }) => {
  const handleDelete = (e) => e.target.parentNode.remove();

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

export default Task;
