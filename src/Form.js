import { useState } from "react";

export function Form({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    //prevent the browser from refreshing
    e.preventDefault();
    //new Task Object
    const newTask = {
      taskName,
      priority,
      dueDate,
      completed: false,
      id: Date.now(),
    };

    onAddTask(newTask);
    setTaskName("");
    setDueDate("");
    setPriority("");
  };
  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task Name:</label>
          <input
            type="text"
            required
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <select
            value={dueDate}
            required
            onChange={(e) => setDueDate(e.target.value)}
          >
            <option value="">Select Due Date</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="nextWeek">Next Week</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            value={priority}
            required
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
