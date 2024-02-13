import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Stats } from "./Stats";
import { TaskList } from "./TaskList";
import { Form } from "./Form";

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

  //clearing tasks
  const handleClearTasks = () => {
    const confirm = window.confirm(
      "Are you sure you want to clear all tasks? This action cannot be Un done!"
    );
    confirm && setTasks([]);
  };

  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <Stats tasks={tasks} />
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onDeleteTask={handleDeleteTask}
          onClearTasks={handleClearTasks}
        />
        <Form onAddTask={handleAddTask} />
      </div>
    </div>
  );
}
