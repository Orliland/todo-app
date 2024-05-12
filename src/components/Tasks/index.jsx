import Task from "../Task";

export default function Tasks({ tasks, onChecked }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          done={task.done}
          onChecked={onChecked}
        />
      ))}
    </div>
  );
}
