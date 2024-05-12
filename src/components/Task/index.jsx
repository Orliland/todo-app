import IconCross from "../../assets/icon-cross.svg";
import "./task.css";

export default function Task({ id, name, done, onChecked }) {
  return (
    <div className="task">
      <input
        type="checkbox"
        className="task__check"
        onChange={() => {
          onChecked(id);
        }}
      />
      <label className="task__label">{name}</label>
      <button className="task__delete">
        <img src={IconCross} alt="delete task" className="task__delete-icon" />
      </button>
    </div>
  );
}
