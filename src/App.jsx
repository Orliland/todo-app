import { useState } from "react";
import "./App.css";

const initialTasks = [
  {
    id: 1,
    name: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 2,
    name: "10 minutes meditation",
    completed: false,
  },
  {
    id: 3,
    name: "Read for 1 hour",
    completed: false,
  },
  {
    id: 4,
    name: "Pick up groceries",
    completed: false,
  },
  {
    id: 5,
    name: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

let nextId = 6;

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <>
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;
