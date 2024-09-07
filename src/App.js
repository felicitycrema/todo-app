import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompletedTasks from "./pages/CompletedTasks";
import AllTasks from "./pages/AllTasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const completeTask = (index) => {
    const newTask = [...tasks];
    newTask[index].completed = true;
    setTasks(newTask);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/" style={{ marginRight: '10px' }}>All Tasks</Link>
          <Link to="/completed">Completed Tasks</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<AllTasks tasks={tasks} addTask={addTask} completeTask={completeTask} />}
          />
          <Route
            path="/completed"
            element={<CompletedTasks tasks={tasks.filter(task => task.completed)} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
