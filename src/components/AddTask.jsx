import { useState } from "react";
import { Plus } from "lucide-react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTaskSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-8">
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full py-4 pr-12 bg-transparent text-lightText text-xl border-b-2 border-darkSurface focus:outline-none focus:border-accentText transition-colors"
      />
      <button
        type="submit"
        className="absolute right-0 bottom-0 p-3 text-secondaryText hover:text-lightText transition-colors"
        aria-label="Add task"
      >
        <Plus size={28} />
      </button>
    </form>
  );
}

export default AddTask;