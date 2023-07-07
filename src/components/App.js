import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)

  function handleDelete(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText))
  } 
  // const visibleTasks = tasks.filter((task) => category === "All" || task.category === category )


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} deleteTask={handleDelete}/>
    </div>
  );
}

export default App;
