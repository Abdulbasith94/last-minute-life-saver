import {
  BarChart3,
  TrendingUp,
} from "lucide-react";

import {
  useAnalytics,
} from "../../context/AnalyticsContext";

export default function WeeklyProductivity() {

  const {
    weekly,
  } =
    useAnalytics();

  const average =
    Math.round(
      weekly.reduce(
        (
          sum,
          day
        ) =>
          sum +
          day.score,
        0
      ) /
      weekly.length
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

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <BarChart3
            className="
              text-blue-400
            "
          />

          <h2 className="text-2xl font-bold">

            Weekly Productivity

          </h2>

        </div>

        <div className="flex items-center gap-2">

          <TrendingUp
            className="
              text-green-400
            "
          />

          <span className="font-bold text-green-400">

            {average}%

          </span>

        </div>

      </div>

      {/* Chart */}

      <div
        className="
          mt-10
          flex
          items-end
          justify-between
          gap-4
          h-[250px]
        "
      >

        {
          weekly.map(
            day => (

              <div
                key={
                  day.day
                }
                className="
                  flex
                  flex-col
                  items-center
                  flex-1
                "
              >

                <span className="mb-3 text-sm">

                  {day.score}

                </span>

                <div
                  className="
                    w-full
                    rounded-t-xl
                    bg-gradient-to-t
                    from-blue-600
                    to-cyan-400
                    transition-all
                  "
                  style={{
                    height:
                      `${day.score * 2}px`,
                  }}
                />

                <span className="mt-3 text-slate-400">

                  {day.day}

                </span>

              </div>

            )
          )
        }

      </div>

      {/* Analysis */}

      <div
        className="
          mt-8
          bg-blue-500/10
          border
          border-blue-500/20
          rounded-2xl
          p-5
        "
      >

        <h3 className="font-bold text-blue-400">

          Capsule AI Analysis

        </h3>

        <p className="mt-3 text-slate-300">

          Your productivity increased significantly
          during the latter half of the week.
          Sunday achieved the highest performance
          score.

        </p>

      </div>

    </div>

  );

}