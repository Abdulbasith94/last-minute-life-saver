import {
  Gauge,
  ShieldAlert,
  TrendingUp,
  Brain,
} from "lucide-react";

import { useTasks }
from "../../context/TaskContext";

export default function SuccessDashboard() {

  const {
    tasks,
  } = useTasks();

  const metrics =
    calculateMetrics(
      tasks
    );

  return (

    <div
      className="
        bg-slate-900
        rounded-3xl
        p-6
      "
    >

      {/* Header */}

      <div className="flex items-center gap-3">

        <Brain
          className="
            text-cyan-400
          "
        />

        <h2 className="text-2xl font-bold">

          AI Success Dashboard

        </h2>

      </div>

      {/* Metrics */}

      <div
        className="
          grid
          grid-cols-3
          gap-5
          mt-6
        "
      >

        <MetricCard
          icon={<Gauge />}
          title="Success"
          value={`${metrics.success}%`}
          color="text-green-400"
        />

        <MetricCard
          icon={<ShieldAlert />}
          title="Emergency"
          value={`${metrics.emergency}%`}
          color="text-red-400"
        />

        <MetricCard
          icon={<TrendingUp />}
          title="Efficiency"
          value={`${metrics.efficiency}%`}
          color="text-blue-400"
        />

      </div>

      {/* AI Evaluation */}

      <div
        className="
          mt-8
          rounded-2xl
          bg-cyan-500/10
          border
          border-cyan-500/20
          p-6
        "
      >

        <h3 className="font-bold text-cyan-400">

          Capsule AI Evaluation

        </h3>

        <div className="mt-4 space-y-3">

          <p>

            Success Probability:
            {" "}
            <strong>
              {metrics.success}%
            </strong>

          </p>

          <p>

            Emergency Score:
            {" "}
            <strong>
              {metrics.emergency}%
            </strong>

          </p>

          <p>

            Productivity Efficiency:
            {" "}
            <strong>
              {metrics.efficiency}%
            </strong>

          </p>

        </div>

      </div>

      {/* Recommendation */}

      <div
        className="
          mt-6
          rounded-2xl
          bg-slate-800
          p-5
        "
      >

        <h3 className="font-bold">

          AI Recommendation

        </h3>

        <p className="mt-3 text-slate-300">

          {
            metrics.success >= 75
              ? "You are on track to complete your goals successfully."
              : metrics.success >= 50
              ? "Focus on high priority tasks immediately."
              : "Emergency mode recommended. Ignore low priority work."
          }

        </p>

      </div>

    </div>

  );

}

function calculateMetrics(
  tasks
) {

  const total =
    tasks.length;

  const completed =
    tasks.filter(
      t =>
        t.completed
    ).length;

  const pending =
    tasks.filter(
      t =>
        !t.completed
    );

  const success =
    total === 0
      ? 100
      : Math.round(
          (
            completed /
            total
          ) * 100
        );

  const emergency =
    Math.min(
      100,
      pending.filter(
        t =>
          t.priority ===
          "High"
      ).length * 25
    );

  const efficiency =
    Math.max(
      0,
      100 -
      emergency +
      success / 2
    );

  return {

    success,

    emergency,

    efficiency,

  };

}

function MetricCard({

  icon,

  title,

  value,

  color,

}) {

  return (

    <div
      className="
        bg-slate-800
        rounded-2xl
        p-5
      "
    >

      <div className={color}>

        {icon}

      </div>

      <p className="text-slate-400 mt-3">

        {title}

      </p>

      <h2
        className={`text-3xl font-bold mt-2 ${color}`}
      >

        {value}

      </h2>

    </div>

  );

}