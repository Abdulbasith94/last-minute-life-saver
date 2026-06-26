import Card from "../ui/Card";
import { Sparkles, Brain } from "lucide-react";

import { useAI } from "../../context/AIContext";

export default function AIInsights() {
  const {
    insights,
    lifeScore,
    averageRisk,
    completedTasks,
    pendingTasks,
  } = useAI();

  const getPerformance = () => {
    if (lifeScore >= 85)
      return "Exceptional";

    if (lifeScore >= 70)
      return "Strong";

    if (lifeScore >= 50)
      return "Moderate";

    return "Critical";
  };

  return (
    <Card>

      {/* Header */}

      <div className="flex items-center gap-3">

        <Sparkles className="text-green-400" />

        <h2 className="text-2xl font-bold">
          AI Insights
        </h2>

      </div>

      {/* Stats */}

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="bg-slate-800/40 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            Performance
          </p>

          <h3 className="text-xl font-bold mt-2 text-green-400">
            {getPerformance()}
          </h3>

        </div>

        <div className="bg-slate-800/40 rounded-xl p-4">

          <p className="text-slate-400 text-sm">
            Risk Index
          </p>

          <h3 className="text-xl font-bold mt-2 text-red-400">
            {averageRisk}%
          </h3>

        </div>

      </div>

      {/* AI Insights */}

      <div className="mt-7 space-y-5">

        {insights.length === 0 ? (

          <p className="text-slate-400">
            Capsule AI is analyzing your productivity patterns.
          </p>

        ) : (

          insights.map(
            (
              insight,
              index
            ) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >

                <Brain
                  size={18}
                  className="text-cyan-400 mt-1"
                />

                <p className="leading-7">
                  {insight}
                </p>

              </div>
            )
          )

        )}

      </div>

      {/* Footer */}

      <div className="mt-8 border-t border-slate-700 pt-5">

        <div className="flex justify-between">

          <span className="text-slate-400">
            Completed Tasks
          </span>

          <span className="text-green-400 font-bold">
            {completedTasks}
          </span>

        </div>

        <div className="flex justify-between mt-3">

          <span className="text-slate-400">
            Pending Tasks
          </span>

          <span className="text-yellow-400 font-bold">
            {pendingTasks}
          </span>

        </div>

      </div>

    </Card>
  );
}