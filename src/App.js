import { IoMdSunny } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdOutlineInbox } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  //set new task based on the current tasks!!!
  const handleAddTask = (task) => {
    setTasks((tasks) => [...tasks, task]);
  };
  //delete task
  const handleDeleteTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  //toggling Items
  const handleToggle = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : { ...task }
      )
    );
  };

  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <Stats />
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onDeleteTask={handleDeleteTask}
        />
        <Form onAddTask={handleAddTask} />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <a className="active" href="#home">
        <MdOutlineInbox />
        Inbox
      </a>
      <a href="#news">
        {" "}
        <IoMdSunny />
        Today
      </a>
      <a href="#contact">
        <SlCalender />
        Upcoming
      </a>
    </div>
  );
}
function Stats() {
  return (
    <div className="stats">
      <div className="completed">
        <p>Tasks accomplished</p>
        <p>40%</p>
      </div>
      <div className="stats_bar">
        <div></div>
      </div>
      <div style={{ color: "#696969" }}>4/10 Tasks</div>
    </div>
  );
}
function TaskList({ tasks, onToggle, onDeleteTask }) {
  return (
    <div className="content">
      <h2>Today</h2>
      <ul className="tasks">
        {tasks.map((task) => (
          <Task
            key={task.taskName}
            task={task}
            onToggle={onToggle}
            onDeleteTask={onDeleteTask}
          />
        ))}
        <div className="actions">
          <select>
            <option value="">Sort By</option>
            <option value="">Input Order</option>
            <option value="">Priority</option>
            <option value="">Completed</option>
          </select>
          <button>Clear Tasks</button>
        </div>
      </ul>
    </div>
  );
}

function Task({ task, onToggle, onDeleteTask }) {
  return (
    <li className="list">
      <div className="display">
        <input
          type="checkbox"
          value={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <p style={task.completed ? { textDecoration: "line-through" } : {}}>
          {task.taskName}
        </p>
      </div>

      <div className="priority">
        <span
          style={
            task.priority === "high"
              ? { color: "green" }
              : task.priority === "low"
              ? { color: "red" }
              : { color: "orange" }
          }
        >
          {task.priority}
        </span>
        <button className="delete" onClick={() => onDeleteTask(task.id)}>
          <MdDelete className="icon" />
        </button>
      </div>
    </li>
  );
}

function Form({ onAddTask }) {
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
