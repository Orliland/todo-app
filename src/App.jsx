import { useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";

import Input from "./components/Input";
import Tasks from "./components/Tasks";

const initialTasks = [
  {
    id: 1,
    name: "Complete online JavaScript course",
    done: true,
  },
  {
    id: 2,
    name: "Jog around the park 3x",
    done: false,
  },
  {
    id: 3,
    name: "10 minutes meditation",
    done: false,
  },
  {
    id: 4,
    name: "Read for 1 hour",
    done: false,
  },
  {
    id: 5,
    name: "Pick up groceries",
    done: false,
  },
  {
    id: 6,
    name: "Complete Todo App on Frontend Mentor",
    done: false,
  },
];

let nextId = 6;

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  const onChangeTask = (e) => {
    setTask(e.target.value);
  };

  const onSubmitTask = () => {
    if (task.length > 0) {
      nextId += 1;
      setTasks([
        ...tasks,
        {
          id: nextId,
          name: task,
          done: false,
        },
      ]);
      setTask("");
    }
  };

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

  const onClearTasksHandler = () => {
    setTasks(tasks.filter((t) => t.done == false));
  };

  const onFilterTasksHandler = (f) => {
    setFilter(f);
  };

  return (
    <main className="main">
      <header className="header">
        <img src={Logo} className="logo" />
      </header>
      <Input task={task} onChange={onChangeTask} onSubmit={onSubmitTask} />
      <Tasks
        tasks={tasks}
        onChecked={onCheckTaskHandler}
        onDelete={onDeleteTaskHandler}
        onClearTasks={onClearTasksHandler}
        filter={filter}
        onFilterTasks={onFilterTasksHandler}
      />
      {/* <footer className="footer">
        <p className="footer__text">Drag and drop to reorder list</p>
      </footer> */}
    </main>
  );
}

export default App;
