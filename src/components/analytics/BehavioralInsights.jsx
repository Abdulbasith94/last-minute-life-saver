import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Clock,
  Target,
  Zap,
} from "lucide-react";

import {
  useTasks,
} from "../../context/TaskContext";

export default function BehavioralInsights() {

  const {
    tasks,
  } = useTasks();

  const analysis =
    generateAnalysis(
      tasks
    );

  return (

    <div
      className="
        mt-8
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

          AI Behavioral Analysis

        </h2>

      </div>

      {/* Metrics */}

      <div
        className="
          grid
          grid-cols-3
          gap-5
          mt-8
        "
      >

        <MetricCard
          icon={<Target />}
          title="Focus Pattern"
          value={analysis.focus}
          color="text-green-400"
        />

        <MetricCard
          icon={<Clock />}
          title="Work Style"
          value={analysis.style}
          color="text-blue-400"
        />

        <MetricCard
          icon={<Zap />}
          title="Energy"
          value={analysis.energy}
          color="text-yellow-400"
        />

      </div>

      {/* Insights */}

      <div className="mt-8 space-y-4">

        {analysis.insights.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="
                bg-slate-800
                rounded-2xl
                p-5
              "
            >

              <div className="flex gap-3">

                {item.type ===
                "positive" ? (

                  <TrendingUp
                    className="
                      text-green-400
                    "
                  />

                ) : (

                  <AlertTriangle
                    className="
                      text-red-400
                    "
                  />

                )}

                <div>

                  <h3 className="font-bold">

                    {item.title}

                  </h3>

                  <p className="text-slate-400 mt-2">

                    {item.description}

                  </p>

                </div>

              </div>

            </div>

          )
        )}

      </div>

      {/* AI Summary */}

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

          Capsule AI Summary

        </h3>

        <p className="mt-4 text-slate-300">

          {analysis.summary}

        </p>

      </div>

    </div>

  );

}

function generateAnalysis(
  tasks
) {

  const completed =
    tasks.filter(
      t =>
        t.completed
    ).length;

  const pending =
    tasks.length -
    completed;

  const focus =
    completed >= pending
      ? "Strong"
      : "Weak";

  const style =
    pending > completed
      ? "Reactive"
      : "Planned";

  const energy =
    completed > 5
      ? "High"
      : "Medium";

  const insights = [

    {
      type:
        "positive",

      title:
        "Peak Performance",

      description:
        "You perform best when working on one high-priority task at a time.",
    },

    {
      type:
        pending > 3
          ? "negative"
          : "positive",

      title:
        "Task Load",

      description:
        pending > 3
          ? "Your workload is becoming overloaded."
          : "Your workload remains manageable.",
    },

    {
      type:
        "positive",

      title:
        "Productivity Pattern",

      description:
        "Your productivity increases near deadlines.",
    },

  ];

  return {

    focus,

    style,

    energy,

    insights,

    summary:
      focus === "Strong"
        ? "AI predicts high productivity if current focus patterns are maintained."
        : "AI predicts productivity decline unless distractions are reduced.",

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