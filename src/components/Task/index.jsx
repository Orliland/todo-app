import IconCross from "../../assets/icon-cross.svg";
import "./task.css";

export default function Task() {
  // TODO: mostrar mensaje de la tarea en alt del icono
  // TODO: si la tarea se marca como completada, añadir clase task__label--checked
  return (
    <div className="task">
      <input type="radio" className="task__check" />
      <label className="task__label">Jog around the park 3x</label>
      <button className="task__delete">
        <img src={IconCross} alt="delete task" className="task__delete-icon" />
      </button>
    </div>
  );
}
