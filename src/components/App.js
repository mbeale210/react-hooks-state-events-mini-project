import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TASKS, CATEGORIES } from "../data";
import { v4 as uuid } from "uuid";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const initialTasks = TASKS; // Assuming TASKS is an array of tasks
  const [tasks, setTasks] = useState(
    initialTasks.map((t) => ({ id: uuid(), ...t })) // Corrected usage of initialTasks
  );
  const [filter, setFilter] = useState("All");
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onFilterChange={handleFilterChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask} />
      <TaskList tasks={tasks} filter={filter} />
    </div>
  );
}

export default App;