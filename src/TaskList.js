import { useState } from "react";
import { Task } from "./Task";

export function TaskList({ tasks, onToggle, onDeleteTask, onClearTasks }) {
  //this should be a string//could be empty or already defined. It depends
  const [sortBy, setSortBy] = useState("");
  //derived state
  let sortedTasks;
  if (sortBy === "input" || sortBy === "") {
    sortedTasks = tasks;
  } else if (sortBy === "completed") {
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));
  } else if (sortBy === "priority") {
    sortedTasks = tasks.slice().sort((a, b) => {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  return (
    <div className="content">
      <h2>Today</h2>
      <ul className="tasks">
        {sortedTasks.map((task) => (
          <Task
            key={task.taskName}
            task={task}
            onToggle={onToggle}
            onDeleteTask={onDeleteTask}
          />
        ))}
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            <option value="input">Input Order</option>
            <option value="priority">Priority</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={onClearTasks}>Clear Tasks</button>
        </div>
      </ul>
    </div>
  );
}
