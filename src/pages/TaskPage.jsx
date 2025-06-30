import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-zinc-900 text-white p-6 flex items-center justify-center">
      <div className="w-[500px] space-y-6">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-purple-400 hover:text-purple-300 transition"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg space-y-2">
          <h2 className="text-2xl font-bold text-purple-300">{title}</h2>
          <p className="text-zinc-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;