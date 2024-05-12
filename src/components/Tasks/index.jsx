import Task from "../Task";

export default function Tasks({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} name={task.name} done={task.done} />
      ))}
    </div>
  );
}
