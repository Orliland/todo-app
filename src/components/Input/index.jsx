import "./input.css";

export default function Input() {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="input__field"
      />
      <span className="input__icon"></span>
    </div>
  );
}
