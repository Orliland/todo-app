import { useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Tasks from "./components/Tasks";

const initialTasks = [
  {
    id: 1,
    name: "Jog around the park 3x",
    done: false,
  },
  {
    id: 2,
    name: "10 minutes meditation",
    done: false,
  },
  {
    id: 3,
    name: "Read for 1 hour",
    done: false,
  },
  {
    id: 4,
    name: "Pick up groceries",
    done: false,
  },
  {
    id: 5,
    name: "Complete Todo App on Frontend Mentor",
    done: false,
  },
];

let nextId = 6;

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const onCheckTaskHandler = (id) => {
    setTasks(
      tasks.map((t) => {
        if (t.id == id) {
          return {
            ...t,
            done: !t.done,
          };
        } else {
          return t;
        }
      })
    );
  };

  const onDeleteTaskHandler = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <Input />
      <Tasks
        tasks={tasks}
        onChecked={onCheckTaskHandler}
        onDelete={onDeleteTaskHandler}
      />
    </>
  );
}

export default App;
