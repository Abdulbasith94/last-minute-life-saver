import {
  Calendar,
  Brain,
} from "lucide-react";

export default function StudyHeatmap() {

  const heatmap = [

    [1,2,3,2,1,0,3],
    [2,3,4,3,2,1,4],
    [3,4,5,4,3,2,5],
    [2,3,4,5,4,3,4],
    [1,2,3,4,5,4,3],

  ];

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

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

        <Calendar
          className="
            text-orange-400
          "
        />

        <h2 className="text-2xl font-bold">

          Study Heatmap

        </h2>

      </div>

      {/* Days */}

      <div
        className="
          grid
          grid-cols-7
          gap-3
          mt-8
          mb-5
        "
      >

        {days.map(
          day => (

            <div
              key={day}
              className="
                text-center
                text-slate-400
              "
            >

              {day}

            </div>

          )
        )}

      </div>

      {/* Heatmap */}

      <div className="space-y-3">

        {heatmap.map(
          (
            week,
            row
          ) => (

            <div
              key={row}
              className="
                grid
                grid-cols-7
                gap-3
              "
            >

              {week.map(
                (
                  value,
                  col
                ) => (

                  <div
                    key={col}
                    className={`
                      h-12
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      font-bold
                      ${getColor(
                        value
                      )}
                    `}
                  >

                    {value}

                  </div>

                )
              )}

            </div>

          )
        )}

      </div>

      {/* Analysis */}

      <div
        className="
          mt-8
          bg-orange-500/10
          border
          border-orange-500/20
          rounded-2xl
          p-5
        "
      >

        <div className="flex items-center gap-3">

          <Brain
            className="
              text-orange-400
            "
          />

          <h3 className="font-bold">

            Capsule AI Analysis

          </h3>

        </div>

        <p className="mt-4 text-slate-300">

          Your productivity peaks
          during the latter half of
          the week. Thursday and
          Friday show the highest
          concentration levels.

        </p>

      </div>

    </div>

  );

}

function getColor(
  value
) {

  switch (
    value
  ) {

    case 0:
      return "bg-slate-800";

    case 1:
      return "bg-green-900";

    case 2:
      return "bg-green-700";

    case 3:
      return "bg-green-600";

    case 4:
      return "bg-green-500";

    case 5:
      return "bg-green-400 text-black";

    default:
      return "bg-slate-800";

  }

}