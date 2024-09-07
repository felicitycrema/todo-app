import React, { useState} from "react"
import TodoItem from "../components/TodoItem";
const AllTasks = ({ tasks, addTask, completeTask }) => {
    const [newTask, setNewTask] = useState("");

    const handleAddTask = () => {
        addTask(newTask);
        setNewTask("");
    };

    return (
      <div>
            <h1>All Tasks</h1>
            <input type="text" value={newTask} placeholder="Add a new task" onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} task={task} completeTask={() => completeTask(index)} />
                ))}
            </ul>
      </div>
  )
}

export default AllTasks