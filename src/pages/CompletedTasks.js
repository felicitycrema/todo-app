// import React, { useState} from "react"
import TodoItem from "../components/TodoItem";

const CompletedTasks = ({ tasks = [] }) => {
  return (
    <div>
      <h1>Completed Tasks</h1>
      {tasks.length === 0 ? (
        <p>No completed tasks</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <TodoItem key={index} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTasks;