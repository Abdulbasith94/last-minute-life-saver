import Card from "../ui/Card";
import { Brain, Clock } from "lucide-react";

import { useAI } from "../../context/AIContext";

export default function TodaySurvivalPlan() {
  const {
    survivalPlan,
    lifeScore,
  } = useAI();

  return (
    <Card>

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <Brain className="text-green-400" />

        <h2 className="text-3xl font-bold">
          Today's Survival Plan
        </h2>

      </div>

      {/* Empty State */}

      {survivalPlan.length === 0 ? (

        <div className="text-center py-10">

          <h3 className="text-2xl font-bold text-green-400">
            Mission Complete
          </h3>

          <p className="text-slate-400 mt-3">
            Capsule AI found no critical tasks for today.
          </p>

        </div>

      ) : (

        <div className="space-y-7">

          {survivalPlan.map(
            (plan, index) => (
              <div
                key={index}
              >

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-3">

                    <Clock
                      size={18}
                      className="text-yellow-400"
                    />

                    <strong>
                      {plan.time}
                    </strong>

                  </div>

                  <span className="text-green-400 font-semibold">
                    {plan.success}%
                  </span>

                </div>

                <p className="text-slate-400 mt-2 ml-8">
                  {plan.task}
                </p>

              </div>
            )
          )}

          {/* Footer */}

          <div className="border-t border-slate-700 pt-5">

            <p className="text-slate-400">
              Estimated Success Rate
            </p>

            <h1 className="text-4xl text-green-400 font-bold mt-2">
              {lifeScore}%
            </h1>

          </div>

        </div>

      )}

    </Card>
  );
}