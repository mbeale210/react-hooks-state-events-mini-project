import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, filter = "All", onDeleteTask }) => {
  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.category === filter);

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask && onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
