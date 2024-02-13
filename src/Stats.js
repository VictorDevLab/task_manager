export function Stats({ tasks }) {
  const numTasks = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.completed).length;
  const percentage = Math.round((tasksCompleted / numTasks) * 100);
  return (
    <div className="stats">
      <div className="completed">
        <p>Tasks accomplished</p>
        {isNaN(percentage) ? <p>0%</p> : <p>{percentage}%</p>}
      </div>
      <div className="stats_bar">
        <div style={{ width: `${percentage}%` }}></div>
      </div>
      <div style={{ color: "#696969" }}>
        {tasksCompleted}/{numTasks} Tasks
      </div>
    </div>
  );
}
