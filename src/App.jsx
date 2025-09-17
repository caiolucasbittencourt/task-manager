import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onAddTaskSubmit(title) {
    if (title.trim()) {
      const newTask = {
        id: uuidv4(),
        title,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
    }
  }

  function onTaskToggle(id) {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  }

  function onDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="min-h-screen bg-darkBackground flex items-center justify-center font-sans text-lightText">
      <div className="w-full max-w-2xl p-8 rounded-lg">
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks 
          tasks={tasks} 
          onTaskToggle={onTaskToggle}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;