import {
  Brain,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

import { useTasks }
from "../../context/TaskContext";

export default function PredictionEngine() {

  const {
    tasks,
  } = useTasks();

  const predictions =
    generatePredictions(
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
            text-purple-400
          "
        />

        <h2 className="text-2xl font-bold">

          AI Prediction Engine

        </h2>

      </div>

      <div className="mt-6 space-y-5">

        {
          predictions.map(
            prediction => (

              <div
                key={
                  prediction.id
                }
                className="
                  bg-slate-800
                  rounded-2xl
                  p-5
                "
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="font-bold">

                      {
                        prediction.task
                      }

                    </h3>

                    <p className="text-slate-400 mt-2">

                      {
                        prediction.message
                      }

                    </p>

                  </div>

                  <div className="text-right">

                    <div className="flex items-center gap-2 justify-end">

                      {
                        prediction.success >= 70
                        ? (
                          <TrendingUp
                            className="text-green-400"
                          />
                        )
                        : (
                          <TrendingDown
                            className="text-red-400"
                          />
                        )
                      }

                      <span
                        className={
                          prediction.success >= 70
                          ? "text-green-400"
                          : "text-red-400"
                        }
                      >

                        {
                          prediction.success
                        }%

                      </span>

                    </div>

                    <p className="text-xs text-slate-500 mt-2">

                      Success Probability

                    </p>

                  </div>

                </div>

                <div className="mt-4">

                  <div className="w-full h-3 bg-slate-700 rounded-full">

                    <div
                      className={
                        prediction.success >= 70
                        ? "h-full rounded-full bg-green-500"
                        : prediction.success >= 40
                        ? "h-full rounded-full bg-yellow-500"
                        : "h-full rounded-full bg-red-500"
                      }
                      style={{
                        width:
                          `${prediction.success}%`
                      }}
                    />

                  </div>

                </div>

              </div>

            )
          )
        }

      </div>

      <div
        className="
          mt-8
          bg-purple-500/10
          border
          border-purple-500/20
          rounded-2xl
          p-5
        "
      >

        <div className="flex items-center gap-3">

          <AlertTriangle
            className="
              text-purple-400
            "
          />

          <h3 className="font-bold">

            Capsule AI Insight

          </h3>

        </div>

        <p className="mt-3 text-slate-300">

          Success probability is calculated using
          task priority, completion status,
          estimated work hours and deadline proximity.

        </p>

      </div>

    </div>

  );

}

function generatePredictions(
  tasks
) {

  const pending =
    tasks.filter(
      task =>
        !task.completed
    );

  return pending.map(
    task => {

      const deadline =
        new Date(
          task.deadline
        );

      const now =
        new Date();

      const hours =
        Math.max(
          1,
          Math.floor(
            (
              deadline -
              now
            ) /
            (
              1000 *
              60 *
              60
            )
          )
        );

      let success =
        100;

      if (
        task.priority ===
        "High"
      )
        success -= 30;

      if (
        task.estimatedHours >
        hours
      )
        success -= 40;

      if (
        hours <= 24
      )
        success -= 20;

      success =
        Math.max(
          5,
          success
        );

      return {

        id:
          task.id,

        task:
          task.title,

        success,

        message:
          success >= 70
          ? "High probability of completion."
          : success >= 40
          ? "Moderate risk detected."
          : "Critical failure risk predicted.",

      };

    }
  );

}