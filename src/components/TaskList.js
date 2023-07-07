import React from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const task = tasks.map((task) => 
    <Task key={task.text} text={task.text} category={task.category}/>
  )

  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
