import {
  Brain,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react";

import { useTasks }
from "../../context/TaskContext";

export default function ProductivityCoach() {

  const {
    tasks,
    statistics,
  } = useTasks();

  const pending =
    tasks.filter(
      task =>
        !task.completed
    );

  const completed =
    tasks.filter(
      task =>
        task.completed
    );

  const totalHours =
    tasks.reduce(
      (
        sum,
        task
      ) =>
        sum +
        (
          task.estimatedHours ||
          0
        ),
      0
    );

  const productivity =
    statistics
      ?.completionRate ||
    0;

  function getAdvice() {

    if (
      productivity >=
      80
    ) {
      return "Excellent performance. Continue focusing on high priority tasks.";
    }

    if (
      productivity >=
      50
    ) {
      return "Good progress. Reduce distractions and finish pending tasks.";
    }

    return "Critical productivity level. Focus on completing one task at a time.";
  }

  return (

    <div
      className="
        mt-8
        rounded-3xl
        bg-slate-900
        p-8
      "
    >

      {/* Header */}

      <div className="flex items-center gap-4">

        <Brain
          className="
            text-green-400
          "
          size={32}
        />

        <div>

          <h2 className="text-3xl font-bold">

            AI Productivity Coach

          </h2>

          <p className="text-slate-400">

            Capsule AI performance analysis

          </p>

        </div>

      </div>

      {/* Stats */}

      <div
        className="
          grid
          grid-cols-4
          gap-5
          mt-8
        "
      >

        <CoachCard
          icon={<Target />}
          title="Completed"
          value={
            completed.length
          }
        />

        <CoachCard
          icon={<Clock />}
          title="Pending"
          value={
            pending.length
          }
        />

        <CoachCard
          icon={<TrendingUp />}
          title="Success"
          value={`${productivity}%`}
        />

        <CoachCard
          icon={<Brain />}
          title="Hours"
          value={totalHours}
        />

      </div>

      {/* Analysis */}

      <div
        className="
          mt-8
          bg-green-500/10
          border
          border-green-500/20
          rounded-2xl
          p-6
        "
      >

        <h3 className="text-green-400 font-bold">

          Capsule AI Analysis

        </h3>

        <p className="mt-4 leading-8">

          {getAdvice()}

        </p>

      </div>

      {/* Recommendations */}

      <div className="mt-8">

        <h3 className="text-2xl font-bold mb-5">

          Recommendations

        </h3>

        <div className="space-y-4">

          <Recommendation
            text="Complete your highest priority task first."
          />

          <Recommendation
            text="Avoid multitasking during emergency periods."
          />

          <Recommendation
            text="Use 45-minute focus sessions."
          />

          <Recommendation
            text="Review progress every 2 hours."
          />

        </div>

      </div>

    </div>

  );

}

function CoachCard({
  icon,
  title,
  value,
}) {

  return (

    <div
      className="
        bg-slate-800
        rounded-2xl
        p-5
      "
    >

      <div className="text-green-400">

        {icon}

      </div>

      <p className="text-slate-400 mt-3">

        {title}

      </p>

      <h2 className="text-3xl font-bold mt-2">

        {value}

      </h2>

    </div>

  );

}

function Recommendation({
  text,
}) {

  return (

    <div
      className="
        bg-slate-800
        rounded-xl
        p-4
      "
    >

      • {text}

    </div>

  );

}