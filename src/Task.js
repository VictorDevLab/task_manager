import { MdDelete } from "react-icons/md";

export function Task({ task, onToggle, onDeleteTask }) {
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
