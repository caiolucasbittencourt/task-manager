import { Check, Trash2 } from "lucide-react";

function Tasks({ tasks, onTaskToggle, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="text-center text-secondaryText mt-8">No tasks found.</p>;
  }
  
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-4 bg-darkSurface rounded-md shadow-sm border-l-4 border-darkSurface hover:border-lightText transition-colors duration-200 ease-in-out"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => onTaskToggle(task.id)}
              className={`w-8 h-8 rounded-full border-2 border-secondaryText flex items-center justify-center transition-colors ${
                task.isCompleted ? "bg-lightText border-lightText" : ""
              }`}
            >
              {task.isCompleted && <Check size={20} className="text-darkBackground" />}
            </button>
            <span
              className={`text-lightText text-xl ${task.isCompleted ? "line-through text-secondaryText" : ""}`}
            >
              {task.title}
            </span>
          </div>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="text-secondaryText hover:text-red-500 transition-colors"
          >
            <Trash2 size={24} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;