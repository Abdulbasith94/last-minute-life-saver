import {
  TrendingUp,
  Brain,
} from "lucide-react";

import {
  useAnalytics,
} from "../../context/AnalyticsContext";

export default function ProductivityTrend() {

  const {
    weekly,
  } = useAnalytics();

  const prediction =
    calculatePrediction(
      weekly
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

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <TrendingUp
            className="
              text-green-400
            "
          />

          <h2 className="text-2xl font-bold">

            Productivity Trend

          </h2>

        </div>

        <div className="flex items-center gap-2">

          <Brain
            className="
              text-cyan-400
            "
          />

          <span className="text-cyan-400">

            AI Forecast

          </span>

        </div>

      </div>

      {/* Graph */}

      <div
        className="
          mt-10
          h-[250px]
          flex
          items-end
          justify-between
          gap-4
        "
      >

        {weekly.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                flex-1
              "
            >

              <span className="mb-3">

                {item.score}

              </span>

              <div
                className="
                  w-full
                  rounded-t-xl
                  bg-gradient-to-t
                  from-green-600
                  to-green-300
                "
                style={{
                  height:
                    `${item.score * 2}px`,
                }}
              />

              <span className="mt-3 text-slate-400">

                {item.day}

              </span>

            </div>

          )
        )}

      </div>

      {/* Forecast */}

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

        <h3 className="font-bold text-green-400">

          Capsule AI Forecast

        </h3>

        <div className="mt-5 space-y-3">

          <p>

            Next Week Productivity:
            {" "}
            <strong>

              {prediction}%

            </strong>

          </p>

          <p>

            Growth Trend:
            {" "}
            <strong>

              {
                prediction >= 80
                  ? "Positive"
                  : "Moderate"
              }

            </strong>

          </p>

          <p>

            Forecast Confidence:
            {" "}
            <strong>

              91%

            </strong>

          </p>

        </div>

      </div>

    </div>

  );

}

function calculatePrediction(
  weekly
) {

  const average =
    weekly.reduce(
      (
        sum,
        item
      ) =>
        sum +
        item.score,
      0
    ) /
    weekly.length;

  return Math.round(
    Math.min(
      100,
      average + 5
    )
  );

}