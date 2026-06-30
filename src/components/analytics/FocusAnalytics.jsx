import {
  Brain,
  Timer,
  Target,
  Activity,
} from "lucide-react";

import {
  useAnalytics,
} from "../../context/AnalyticsContext";

export default function FocusAnalytics() {

  const {
    focus,
    analytics,
  } = useAnalytics();

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
            text-purple-400
          "
        />

        <h2 className="text-2xl font-bold">

          Focus Analytics

        </h2>

      </div>

      {/* Score */}

      <div className="flex justify-center mt-10">

        <div className="relative">

          <svg
            width="220"
            height="220"
          >

            <circle
              cx="110"
              cy="110"
              r="90"
              stroke="#1E293B"
              strokeWidth="15"
              fill="none"
            />

            <circle
              cx="110"
              cy="110"
              r="90"
              stroke="#A855F7"
              strokeWidth="15"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={
                565
              }
              strokeDashoffset={
                565 -
                (
                  focus /
                  100
                ) *
                565
              }
              transform="rotate(-90 110 110)"
            />

          </svg>

          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
            "
          >

            <h1 className="text-5xl font-bold text-purple-400">

              {focus}

            </h1>

            <p className="text-slate-400">

              Focus Score

            </p>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div
        className="
          grid
          grid-cols-3
          gap-5
          mt-10
        "
      >

        <Card
          icon={<Timer />}
          title="Sessions"
          value={
            analytics.completed
          }
          color="text-green-400"
        />

        <Card
          icon={<Target />}
          title="Success"
          value={`${analytics.completionRate}%`}
          color="text-blue-400"
        />

        <Card
          icon={<Activity />}
          title="Productivity"
          value={`${analytics.productivity}%`}
          color="text-purple-400"
        />

      </div>

      {/* AI Analysis */}

      <div
        className="
          mt-8
          rounded-2xl
          bg-purple-500/10
          border
          border-purple-500/20
          p-6
        "
      >

        <h3 className="font-bold text-purple-400">

          Capsule AI Concentration Analysis

        </h3>

        <p className="mt-4 text-slate-300">

          {
            focus >= 80
            ? "Excellent concentration detected."
            : focus >= 50
            ? "Moderate focus level. Reduce distractions."
            : "Critical focus reduction detected."
          }

        </p>

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