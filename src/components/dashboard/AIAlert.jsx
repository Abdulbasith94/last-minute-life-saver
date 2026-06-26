import { AlertTriangle, Clock } from "lucide-react";

import { useAI } from "../../context/AIContext";

export default function AIAlert() {
  const { recommendation, criticalTasks } =
    useAI();

  if (
    !criticalTasks ||
    criticalTasks.length === 0
  ) {
    return (
      <div className="bg-green-950 border border-green-500 p-6 rounded-xl mt-6">

        <h2 className="text-xl font-bold text-green-400">
          ✓ Capsule AI Status
        </h2>

        <p className="mt-3">
          No critical deadlines detected.
        </p>

        <p className="mt-2 text-green-300">
          You're currently on track.
        </p>

      </div>
    );
  }

  const task =
    criticalTasks[0];

  return (
    <div className="bg-red-950 border border-red-500 p-6 rounded-xl mt-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <AlertTriangle
            className="text-red-400"
            size={28}
          />

          <h2 className="text-xl font-bold text-red-400">
            AI Warning
          </h2>

        </div>

        <div className="text-right">

          <p className="text-red-300 text-sm">
            Risk
          </p>

          <h1 className="text-3xl font-bold text-red-400">
            {task.risk}%
          </h1>

        </div>

      </div>

      {/* Task */}

      <div className="mt-5">

        <h3 className="text-2xl font-bold">
          {task.title}
        </h3>

        <p className="text-slate-400 mt-2">
          {task.description}
        </p>

      </div>

      {/* Details */}

      <div className="mt-6 grid grid-cols-2 gap-6">

        <div>

          <p className="text-slate-500">
            Priority
          </p>

          <h3 className="font-bold mt-1">
            {task.priority}
          </h3>

        </div>

        <div>

          <div className="flex items-center gap-2">

            <Clock
              size={16}
              className="text-yellow-400"
            />

            <span className="text-slate-500">
              Deadline
            </span>

          </div>

          <h3 className="font-bold mt-1">
            {task.deadline}
          </h3>

        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-xl p-4">

        <h3 className="font-bold text-red-400">
          Capsule AI Recommendation
        </h3>

        <p className="mt-2 text-slate-300">
          {recommendation.message}
        </p>

      </div>

    </div>
  );
}