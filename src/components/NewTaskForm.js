import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [form, setForm] = useState({ text: "", category: categories[0] });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(form);
    setForm({ text: "", category: categories[0] });
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
          required
        />
      </label>
      <label>
        Category
        <select name="category" value={form.category} onChange={handleChange}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
};

export default NewTaskForm;
