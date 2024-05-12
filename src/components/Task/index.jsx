import IconCross from "../../assets/icon-cross.svg";
import "./task.css";

function InputCheck({ done }) {
  if (done) {
    return <input type="checkbox" className="task__check" checked />;
  } else {
    return <input type="checkbox" className="task__check" />;
  }
}

export default function Task({ name, done }) {
  return (
    <div className="task">
      <InputCheck done={done} />
      <label className="task__label">{name}</label>
      <button className="task__delete">
        <img src={IconCross} alt="delete task" className="task__delete-icon" />
      </button>
    </div>
  );
}
