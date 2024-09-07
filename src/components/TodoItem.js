import React from "react"
import CompletedTasks from "../pages/CompletedTasks";
const TodoItem = ({task, completeTask}) => {
  return (
      <div>
          <li style={{ textDecorator: task.completed ? "line-through" : "none" }}>{task.text}
              {!task.completed && (<button onClick={completeTask}>Complete</button>
              )}
              
          </li>
      <CompletedTasks />
    </div>
  )
}

export default TodoItem;