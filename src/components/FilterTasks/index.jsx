import "./filtertasks.css";

export default function FilterTasks({ filter, onFilterTasks }) {
  return (
    <div className="filters">
      <button
        className={`filter ${filter == "all" && "filter--active"}`}
        onClick={() => onFilterTasks("all")}
      >
        All
      </button>
      <button
        className={`filter ${filter == "active" && "filter--active"}`}
        onClick={() => onFilterTasks("active")}
      >
        Active
      </button>
      <button
        className={`filter ${filter == "completed" && "filter--active"}`}
        onClick={() => onFilterTasks("completed")}
      >
        Completed
      </button>
    </div>
  );
}
