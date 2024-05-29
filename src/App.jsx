import React, { useEffect, useState } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  const oldTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          status="todo"
          title="To do"
          icon={todoIcon}
        />
        <TaskColumn
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          tasks={tasks}
          status="doing"
          title="Doing"
          icon={doingIcon}
        />
        <TaskColumn
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          tasks={tasks}
          status="done"
          title="Done"
          icon={doneIcon}
        />
      </main>
      <h1>Active Card - {activeCard}</h1>
    </div>
  );
};

export default App;
