import "./filtertasks.css";

export default function FilterTasks({ onFilterTasks }) {
  return (
    <div className="filters">
      <button className="filter" onClick={() => onFilterTasks("all")}>
        All
      </button>
      <button className="filter" onClick={() => onFilterTasks("active")}>
        Active
      </button>
      <button className="filter" onClick={() => onFilterTasks("complete")}>
        Complete
      </button>
    </div>
  );
}
