import {
  Siren,
  ShieldAlert,
  Clock,
  Zap,
} from "lucide-react";

import { useTasks }
from "../../context/TaskContext";

export default function RescueMode() {

  const {
    tasks,
  } = useTasks();

  const rescue =
    calculateRescue(
      tasks
    );

  if (
    !rescue.active
  ) {
    return null;
  }

  return (

    <div
      className="
        bg-red-500/10
        border
        border-red-500/30
        rounded-3xl
        p-6
      "
    >

      {/* Header */}

      <div className="flex items-center gap-3">

        <Siren
          className="
            text-red-400
          "
        />

        <h2 className="text-3xl font-bold text-red-400">

          LAST MINUTE RESCUE MODE

        </h2>

      </div>

      <p className="mt-3 text-slate-300">

        Capsule AI detected a potential failure scenario.

      </p>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-5 mt-8">

        <Card
          icon={<ShieldAlert />}
          title="Risk"
          value={`${rescue.risk}%`}
          color="text-red-400"
        />

        <Card
          icon={<Clock />}
          title="Hours Left"
          value={rescue.hours}
          color="text-yellow-400"
        />

        <Card
          icon={<Zap />}
          title="Success"
          value={`${rescue.success}%`}
          color="text-green-400"
        />

      </div>

      {/* Plan */}

      <div
        className="
          mt-8
          bg-slate-900
          rounded-2xl
          p-5
        "
      >

        <h3 className="font-bold">

          Emergency Action Plan

        </h3>

        <ul className="mt-4 space-y-3">

          <li>
            • Ignore all low priority tasks
          </li>

          <li>
            • Start highest risk task immediately
          </li>

          <li>
            • Use 45 minute focus sessions
          </li>

          <li>
            • Submit minimum viable work first
          </li>

          <li>
            • Re-evaluate after completion
          </li>

        </ul>

      </div>

    </div>

  );

}

function calculateRescue(
  tasks
) {

  const pending =
    tasks.filter(
      task =>
        !task.completed
    );

  const high =
    pending.filter(
      task =>
        task.priority ===
        "High"
    );

  const risk =
    Math.min(
      100,
      high.length * 25
    );

  const deadline =
    pending[0]
      ?.deadline;

  let hours =
    72;

  if (
    deadline
  ) {

    hours =
      Math.max(
        1,
        Math.floor(
          (
            new Date(
              deadline
            ) -
            new Date()
          ) /
          (
            1000 *
            60 *
            60
          )
        )
      );

  }

  const success =
    Math.max(
      5,
      100 -
        risk
    );

  return {

    active:
      risk >= 50,

    risk,

    hours,

    success,

  };

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
        bg-slate-900
        rounded-2xl
        p-5
      "
    >

      <div className={color}>

        {icon}

      </div>

      <p className="mt-3 text-slate-400">

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