import Task from "../Task";
import "./tasks.css";

export default function Tasks({ tasks, onChecked, onDelete }) {
  return (
    <div>
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
    </div>
  );
}
