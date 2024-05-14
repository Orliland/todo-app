import Task from "../Task";
import FilterTasks from "../FilterTasks";
import "./tasks.css";

const InfoTasks = ({ tasks, onClearTasks, onFilterTasks, filter }) => {
  const tasksLength = tasks.filter((t) => t.done == false).length;
  return (
    <div className="task">
      <span className="tasks__length">{tasksLength} items left</span>
      <FilterTasks filter={filter} onFilterTasks={onFilterTasks} />
      <button className="tasks__clear" onClick={onClearTasks}>
        Clear Completed
      </button>
    </div>
  );
};

export default function Tasks({
  tasks,
  onChecked,
  onDelete,
  onClearTasks,
  filter,
  onFilterTasks,
}) {
  let tasksFiltered;
  switch (filter) {
    case "all":
      tasksFiltered = tasks;
      break;
    case "active":
      tasksFiltered = tasks.filter((t) => t.done == false);
      break;
    case "completed":
      tasksFiltered = tasks.filter((t) => t.done);
      break;
  }
  return (
    <div className="tasks">
      {tasksFiltered.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          done={task.done}
          onChecked={onChecked}
          onDelete={onDelete}
        />
      ))}
      <InfoTasks
        tasks={tasks}
        onClearTasks={onClearTasks}
        onFilterTasks={onFilterTasks}
        filter={filter}
      />
    </div>
  );
}
