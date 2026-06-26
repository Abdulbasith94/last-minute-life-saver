import Card from "../ui/Card";
import { CalendarClock } from "lucide-react";

import { useAI } from "../../context/AIContext";

export default function UpcomingDeadlines() {
  const { upcoming } = useAI();

  const getColor = (risk) => {
    if (risk >= 80)
      return "bg-red-500";

    if (risk >= 60)
      return "bg-orange-500";

    if (risk >= 40)
      return "bg-yellow-500";

    return "bg-green-500";
  };

  const getDayText = (days) => {
    if (days <= 0)
      return "Today";

    if (days === 1)
      return "Tomorrow";

    return `${days} Days`;
  };

  return (
    <Card>

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <CalendarClock
          className="text-cyan-400"
          size={24}
        />

        <h2 className="text-2xl font-bold">
          Priority Deadlines
        </h2>

      </div>

      {/* Empty State */}

      {upcoming.length === 0 ? (

        <div className="py-8 text-center">

          <h3 className="text-green-400 text-xl font-bold">
            No Pending Deadlines
          </h3>

          <p className="text-slate-400 mt-2">
            Capsule AI detected no upcoming tasks.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {upcoming.map(
            (task, index) => (
              <div
                key={
                  task.id ||
                  index
                }
                className="flex justify-between items-center"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`w-3 h-3 rounded-full ${getColor(
                      task.risk
                    )}`}
                  />

                  <div>

                    <p className="font-semibold">
                      {task.title}
                    </p>

                    <p className="text-sm text-slate-500">
                      Risk:{" "}
                      {task.risk}%
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-slate-400">
                    {getDayText(
                      task.daysLeft
                    )}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {
                      task.priority
                    }
                  </p>

                </div>

              </div>
            )
          )}

        </div>

      )}

    </Card>
  );
}