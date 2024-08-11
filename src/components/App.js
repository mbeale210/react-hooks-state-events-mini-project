import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TASKS, CATEGORIES } from "../data";
import { v4 as uuid } from "uuid";

function App() {
  const [tasks, setTasks] = useState(TASKS.map((t) => ({ id: uuid(), ...t })));
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleNewTask = (newTask) => {
    setTasks([...tasks, { id: uuid(), ...newTask }]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onFilterChange={handleFilterChange}
        currentFilter={filter}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask} />
      <TaskList tasks={tasks} filter={filter} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
