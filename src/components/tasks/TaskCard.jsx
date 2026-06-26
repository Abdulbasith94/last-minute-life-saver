import {
  CheckCircle,
  Circle,
  Trash2,
  Calendar,
  Clock3,
  Flag,
} from "lucide-react";

import { useTasks } from "../../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask, toggleTask } = useTasks();

  const priorityColor = {
    High: "bg-red-500/20 text-red-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Low: "bg-green-500/20 text-green-400",
  };

  const riskColor = () => {
    if (task.risk >= 80)
      return "text-red-500";

    if (task.risk >= 50)
      return "text-yellow-400";

    return "text-green-400";
  };

  const getRemainingTime = () => {
    const now = new Date();

    const deadline = new Date(task.deadline + "T23:59:59");

    const difference = deadline - now;

    if (difference <= 0)
      return "Deadline Passed";

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference %
        (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    return `${days}d ${hours}h Left`;
  };

  return (
    <div
      className={`bg-slate-900 rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
        task.completed
          ? "border-green-500"
          : "border-slate-700"
      }`}
    >
      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h2
            className={`text-xl font-bold ${
              task.completed
                ? "line-through text-gray-500"
                : "text-white"
            }`}
          >
            {task.title}
          </h2>

          <p className="text-gray-400 mt-2">
            {task.description}
          </p>

        </div>

        <button
          onClick={() =>
            deleteTask(task.id)
          }
          className="text-red-400 hover:text-red-500 transition"
        >
          <Trash2 size={20} />
        </button>

      </div>

      {/* Priority */}

      <div className="mt-5 flex items-center gap-3">

        <Flag size={18} />

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>

      </div>

      {/* Deadline */}

      <div className="mt-4 flex items-center gap-3 text-gray-300">

        <Calendar size={18} />

        <span>
          {task.deadline}
        </span>

      </div>

      {/* Countdown */}

      <div className="mt-3 flex items-center gap-3 text-cyan-400">

        <Clock3 size={18} />

        <span>
          {getRemainingTime()}
        </span>

      </div>

      {/* Category */}

      <div className="mt-3">

        <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-300">
          {task.category}
        </span>

      </div>

      {/* Estimated Hours */}

      <div className="mt-4 text-gray-300">

        Estimated Hours :

        <span className="ml-2 text-white font-semibold">
          {task.estimatedHours}
        </span>

      </div>

      {/* Risk */}

      <div className="mt-3">

        Risk Score :

        <span
          className={`ml-2 font-bold ${riskColor()}`}
        >
          {task.risk}%
        </span>

      </div>

      {/* Footer */}

      <div className="mt-6 flex justify-between items-center">

        <button
          onClick={() =>
            toggleTask(task.id)
          }
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${
            task.completed
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {task.completed ? (
            <>
              <CheckCircle size={18} />
              Completed
            </>
          ) : (
            <>
              <Circle size={18} />
              Mark Complete
            </>
          )}
        </button>

        <span
          className={`text-sm font-semibold ${
            task.completed
              ? "text-green-400"
              : "text-yellow-400"
          }`}
        >
          {task.completed
            ? "Completed"
            : "Pending"}
        </span>

      </div>

    </div>
  );
}