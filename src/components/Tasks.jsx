import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-zinc-800 rounded-2xl shadow-lg">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2 items-center">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`flex-1 flex items-center gap-2 text-white p-3 rounded-lg transition ${
              task.isCompleted
                ? "bg-green-700 line-through"
                : "bg-zinc-700 hover:bg-zinc-600"
            }`}
          >
            {task.isCompleted && <CheckIcon size={18} />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon size={18} />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon size={18} />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;