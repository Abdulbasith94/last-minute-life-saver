import {
  Brain,
  TrendingUp,
  TrendingDown,
  CalendarClock,
  Sparkles,
} from "lucide-react";

import {
  useTasks,
} from "../../context/TaskContext";

export default function ProductivityForecast() {

  const {
    tasks,
  } = useTasks();

  const forecast =
    generateForecast(
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
            text-indigo-400
          "
        />

        <h2 className="text-2xl font-bold">

          AI Productivity Forecast

        </h2>

      </div>

      {/* Forecast Cards */}

      <div
        className="
          grid
          grid-cols-4
          gap-5
          mt-8
        "
      >

        <ForecastCard
          icon={<CalendarClock />}
          title="Next 24H"
          value={`${forecast.day}%`}
          color="text-green-400"
        />

        <ForecastCard
          icon={<TrendingUp />}
          title="Next Week"
          value={`${forecast.week}%`}
          color="text-blue-400"
        />

        <ForecastCard
          icon={<Sparkles />}
          title="Next Month"
          value={`${forecast.month}%`}
          color="text-purple-400"
        />

        <ForecastCard
          icon={
            forecast.trend ===
            "Improving"
              ? <TrendingUp/>
              : <TrendingDown/>
          }
          title="Trend"
          value={
            forecast.trend
          }
          color={
            forecast.trend ===
            "Improving"
              ? "text-green-400"
              : "text-red-400"
          }
        />

      </div>

      {/* Graph */}

      <div
        className="
          mt-10
          flex
          items-end
          justify-between
          h-[220px]
          gap-4
        "
      >

        {forecast.graph.map(
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

                {item.value}

              </span>

              <div
                className="
                  w-full
                  rounded-t-xl
                  bg-gradient-to-t
                  from-indigo-600
                  to-cyan-400
                "
                style={{
                  height:
                    `${item.value * 1.8}px`,
                }}
              />

              <span className="mt-3 text-slate-400">

                {item.day}

              </span>

            </div>

          )
        )}

      </div>

      {/* AI Prediction */}

      <div
        className="
          mt-8
          bg-indigo-500/10
          border
          border-indigo-500/20
          rounded-2xl
          p-6
        "
      >

        <h3 className="font-bold text-indigo-400">

          Capsule AI Prediction

        </h3>

        <p className="mt-4 text-slate-300">

          {forecast.message}

        </p>

      </div>

    </div>

  );

}

function generateForecast(
  tasks
) {

  const completed =
    tasks.filter(
      t =>
        t.completed
    ).length;

  const total =
    tasks.length || 1;

  const score =
    Math.round(
      (
        completed /
        total
      ) * 100
    );

  const day =
    Math.min(
      100,
      score + 10
    );

  const week =
    Math.min(
      100,
      score + 15
    );

  const month =
    Math.min(
      100,
      score + 20
    );

  return {

    day,

    week,

    month,

    trend:
      week >= 70
        ? "Improving"
        : "Declining",

    graph: [

      {
        day:"Mon",
        value:day,
      },

      {
        day:"Tue",
        value:day+2,
      },

      {
        day:"Wed",
        value:week-3,
      },

      {
        day:"Thu",
        value:week,
      },

      {
        day:"Fri",
        value:week+2,
      },

      {
        day:"Sat",
        value:month-2,
      },

      {
        day:"Sun",
        value:month,
      },

    ],

    message:
      week >= 70
        ? "AI predicts sustained productivity growth over the next seven days."
        : "AI predicts productivity decline unless workload distribution improves.",

  };

}

function ForecastCard({

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