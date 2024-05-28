import React, { useState } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn tasks={tasks} status="todo" title="To do" icon={todoIcon} />
        <TaskColumn
          tasks={tasks}
          status="doing"
          title="Doing"
          icon={doingIcon}
        />
        <TaskColumn tasks={tasks} status="done" title="Done" icon={doneIcon} />
      </main>
    </div>
  );
};

export default App;
