import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [form, setForm] = useState({ text: "", category: "" });

  const renderCategories = categories.map((c) => {
    return (
      <option key={c} value={c}>
        {c}
      </option>
    );
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({
      id: uuid(),
      ...form,
    });
    setForm({ text: "", category: "" }); // Reset form after submission
  };

  return (
    <form className="new-task-form" autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={form.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={form.category} onChange={handleChange}>
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
};

export default NewTaskForm;
