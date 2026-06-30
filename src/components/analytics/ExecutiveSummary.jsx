import {
  User,
  Brain,
  Activity,
  Award,
  Target,
} from "lucide-react";

import {
  useTasks,
} from "../../context/TaskContext";

export default function ExecutiveSummary() {

  const {
    tasks,
  } = useTasks();

  const report =
    generateReport(
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

        <User
          className="
            text-cyan-400
          "
        />

        <h2 className="text-2xl font-bold">

          Personal Analytics Dashboard

        </h2>

      </div>

      {/* Metrics */}

      <div
        className="
          grid
          grid-cols-4
          gap-5
          mt-8
        "
      >

        <MetricCard
          icon={<Activity />}
          title="Tasks"
          value={report.total}
          color="text-blue-400"
        />

        <MetricCard
          icon={<Award />}
          title="Completed"
          value={report.completed}
          color="text-green-400"
        />

        <MetricCard
          icon={<Target />}
          title="Success"
          value={`${report.success}%`}
          color="text-yellow-400"
        />

        <MetricCard
          icon={<Brain />}
          title="AI Score"
          value={report.aiScore}
          color="text-purple-400"
        />

      </div>

      {/* Executive Summary */}

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

        <h3 className="text-cyan-400 font-bold">

          Capsule AI Executive Summary

        </h3>

        <div className="mt-5 space-y-4">

          <p>

            • Total Tasks Analyzed:
            {" "}
            <strong>
              {report.total}
            </strong>

          </p>

          <p>

            • Completion Rate:
            {" "}
            <strong>
              {report.success}%
            </strong>

          </p>

          <p>

            • Productivity Category:
            {" "}
            <strong>
              {report.category}
            </strong>

          </p>

          <p>

            • AI Performance Rating:
            {" "}
            <strong>
              {report.rating}
            </strong>

          </p>

          <p>

            • Predicted Future Outcome:
            {" "}
            <strong>
              {report.prediction}
            </strong>

          </p>

        </div>

      </div>

      {/* Recommendation */}

      <div
        className="
          mt-8
          bg-slate-800
          rounded-2xl
          p-6
        "
      >

        <h3 className="font-bold">

          Final AI Recommendation

        </h3>

        <p className="mt-4 text-slate-300">

          {report.recommendation}

        </p>

      </div>

    </div>

  );

}

function generateReport(
  tasks
) {

  const total =
    tasks.length;

  const completed =
    tasks.filter(
      t =>
        t.completed
    ).length;

  const success =
    total === 0
      ? 100
      : Math.round(
          (
            completed /
            total
          ) * 100
        );

  const aiScore =
    Math.max(
      50,
      success + 10
    );

  return {

    total,

    completed,

    success,

    aiScore,

    category:
      success >= 80
        ? "Elite Performer"
        : success >= 50
        ? "Consistent Performer"
        : "Recovery Mode",

    rating:
      aiScore >= 90
        ? "Excellent"
        : aiScore >= 70
        ? "Good"
        : "Needs Improvement",

    prediction:
      success >= 70
        ? "High probability of success"
        : "Increased risk of delays",

    recommendation:
      success >= 70
        ? "Continue current productivity patterns and maintain focus."
        : "Prioritize critical tasks and reduce workload fragmentation.",

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