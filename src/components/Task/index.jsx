import IconCross from "../../assets/icon-cross.svg";
import "./task.css";

export default function Task({ id, name, done, onChecked, onDelete }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        className="task__check"
        defaultChecked={done}
        onChange={() => {
          onChecked(id);
        }}
      />
      <label className={`task__label ${done ? "task__label--checked" : ""}`}>
        {name}
      </label>
      <button
        className="task__delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        <img src={IconCross} alt="delete task" className="task__delete-icon" />
      </button>
    </div>
  );
}
