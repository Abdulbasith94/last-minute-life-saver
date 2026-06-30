import {
  BarChart3,
  CheckCircle,
  Clock,
  Target,
  Trophy,
} from "lucide-react";

import {
  useTasks,
} from "../../context/TaskContext";

export default function UserStatistics() {

  const {
    tasks,
  } = useTasks();

  const completed =
    tasks.filter(
      task =>
        task.completed
    ).length;

  const pending =
    tasks.length -
    completed;

  const completionRate =
    tasks.length === 0
      ? 100
      : Math.round(
          (
            completed /
            tasks.length
          ) * 100
        );

  const highPriority =
    tasks.filter(
      task =>
        task.priority ===
        "High"
    ).length;

  const productivity =
    Math.max(
      50,
      completionRate + 10
    );

  return (

    <div
      className="
        mt-8
        bg-slate-900
        rounded-3xl
        p-8
      "
    >

      <div className="flex items-center gap-3">

        <BarChart3
          className="
            text-cyan-400
          "
        />

        <h2 className="text-2xl font-bold">

          Account Analytics

        </h2>

      </div>

      <div
        className="
          grid
          grid-cols-5
          gap-5
          mt-8
        "
      >

        <Card
          icon={<Target />}
          title="Tasks"
          value={tasks.length}
          color="text-blue-400"
        />

        <Card
          icon={<CheckCircle />}
          title="Completed"
          value={completed}
          color="text-green-400"
        />

        <Card
          icon={<Clock />}
          title="Pending"
          value={pending}
          color="text-yellow-400"
        />

        <Card
          icon={<Trophy />}
          title="Success"
          value={`${completionRate}%`}
          color="text-purple-400"
        />

        <Card
          icon={<BarChart3 />}
          title="AI Score"
          value={productivity}
          color="text-cyan-400"
        />

      </div>

      <div
        className="
          mt-8
          bg-cyan-500/10
          border
          border-cyan-500/20
          rounded-2xl
          p-6
        "
      >

        <h3 className="font-bold text-cyan-400">

          Capsule AI Analysis

        </h3>

        <div className="mt-4 space-y-3">

          <p>

            • Tasks Completed:
            {" "}
            <strong>
              {completed}
            </strong>

          </p>

          <p>

            • High Priority Tasks:
            {" "}
            <strong>
              {highPriority}
            </strong>

          </p>

          <p>

            • Productivity Rating:
            {" "}
            <strong>

              {
                productivity >= 90
                ? "Excellent"
                : productivity >= 70
                ? "Good"
                : "Average"
              }

            </strong>

          </p>

          <p>

            • AI Prediction:
            {" "}
            <strong>

              {
                completionRate >= 70
                ? "High future success probability"
                : "Focus improvement required"
              }

            </strong>

          </p>

        </div>

      </div>

    </div>

  );

}

function Card({

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