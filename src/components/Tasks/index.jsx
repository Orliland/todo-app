import Task from "../Task";
import "./tasks.css";
const InfoTasks = ({ tasks, onClearTasks }) => {
  const tasksLength = tasks.filter((t) => t.done == false).length;
  return (
    <div className="task">
      <span className="tasks__length">{tasksLength} items left</span>
      <button className="tasks__clear" onClick={onClearTasks}>
        Clear Completed
      </button>
    </div>
  );
};

export default function Tasks({ tasks, onChecked, onDelete, onClearTasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          done={task.done}
          onChecked={onChecked}
          onDelete={onDelete}
        />
      ))}
      <InfoTasks tasks={tasks} onClearTasks={onClearTasks} />
    </div>
  );
}
