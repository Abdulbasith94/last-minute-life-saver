import {
  AlertTriangle,
  Clock,
  Zap,
  Target,
} from "lucide-react";

import { useTasks }
from "../../context/TaskContext";

export default function EmergencyPanel() {

  const {
    tasks,
  } = useTasks();

  const pending =
    tasks.filter(
      task =>
        !task.completed
    );

  const critical =
    pending
      .sort(
        (
          a,
          b
        ) =>
          (b.risk || 0) -
          (a.risk || 0)
      )
      .slice(0, 3);

  const totalHours =
    pending.reduce(
      (
        sum,
        task
      ) =>
        sum +
        (
          task.estimatedHours ||
          0
        ),
      0
    );

  return (

    <div
      className="
        mt-8
        bg-red-950/20
        border
        border-red-500/20
        rounded-3xl
        p-8
      "
    >

      {/* Header */}

      <div className="flex items-center gap-4">

        <AlertTriangle
          className="
            text-red-400
          "
          size={30}
        />

        <div>

          <h2 className="text-3xl font-bold">

            Emergency Rescue Mode

          </h2>

          <p className="text-slate-400">

            AI generated survival strategy

          </p>

        </div>

      </div>

      {/* Stats */}

      <div
        className="
          grid
          grid-cols-3
          gap-5
          mt-8
        "
      >

        <Card
          icon={<Clock />}
          title="Pending"
          value={
            pending.length
          }
        />

        <Card
          icon={<Target />}
          title="Critical"
          value={
            critical.length
          }
        />

        <Card
          icon={<Zap />}
          title="Hours"
          value={
            totalHours
          }
        />

      </div>

      {/* Rescue Plan */}

      <div className="mt-10">

        <h3 className="text-2xl font-bold mb-6">

          AI Rescue Plan

        </h3>

        <div className="space-y-4">

          {critical.map(
            (
              task,
              index
            ) => (

              <div
                key={
                  task.id
                }
                className="
                  bg-slate-900
                  rounded-2xl
                  p-5
                  flex
                  justify-between
                  items-center
                "
              >

                <div>

                  <p className="text-red-400 font-bold">

                    STEP
                    {" "}
                    {index + 1}

                  </p>

                  <h3 className="text-xl font-semibold mt-1">

                    {task.title}

                  </h3>

                  <p className="text-slate-400 mt-2">

                    Deadline:
                    {" "}
                    {task.deadline}

                  </p>

                </div>

                <div className="text-right">

                  <p className="text-slate-400">

                    Estimated

                  </p>

                  <h2 className="text-2xl font-bold">

                    {
                      task.estimatedHours
                    }
                    h

                  </h2>

                </div>

              </div>

            )
          )}

        </div>

      </div>

      {/* Recommendation */}

      <div
        className="
          mt-8
          bg-red-500/10
          border
          border-red-500/20
          rounded-2xl
          p-6
        "
      >

        <h3 className="text-red-400 font-bold">

          Capsule AI Recommendation

        </h3>

        <p className="mt-3 text-slate-300">

          Ignore low priority work.
          Finish the highest risk task first.
          Work in 45 minute focus sessions.
          Submit incomplete work if necessary.
          Optimize for completion rather than perfection.

        </p>

      </div>

    </div>

  );

}

function Card({
  icon,
  title,
  value,
}) {

  return (

    <div
      className="
        bg-slate-900
        rounded-2xl
        p-5
      "
    >

      <div className="text-red-400">

        {icon}

      </div>

      <p className="text-slate-400 mt-3">

        {title}

      </p>

      <h2 className="text-3xl font-bold mt-2">

        {value}

      </h2>

    </div>

  );

}