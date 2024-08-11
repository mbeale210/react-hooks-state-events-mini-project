import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, filter, onDeleteTask }) => {
  const filteredTasks = tasks.filter(
    (t) => filter === "All" || t.category === filter
  );

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
