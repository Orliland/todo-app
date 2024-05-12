import Task from "../Task";
import "./tasks.css";
const InfoTasks = ({ tasksLenght, onClearTasks }) => {
  return (
    <div className="tasks">
      <span>{tasksLenght} items left</span>
      <button onClick={onClearTasks}>Clear Completed</button>
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
      <InfoTasks onClearTasks={onClearTasks} />
    </div>
  );
}
