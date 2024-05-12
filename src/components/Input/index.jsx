import "./input.css";

export default function Input({ task, onChange, onSubmit }) {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="input__field"
        onChange={(e) => onChange(e)}
        value={task}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            onSubmit();
          }
        }}
      />
      <span className="input__icon" onClick={onSubmit}></span>
    </div>
  );
}
