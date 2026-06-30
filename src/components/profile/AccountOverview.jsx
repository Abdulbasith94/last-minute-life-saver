import {
  User,
  Shield,
  Clock,
  Database,
  Trophy,
  Brain,
} from "lucide-react";

import {
  useAuth,
} from "../../context/AuthContext";

import {
  useTasks,
} from "../../context/TaskContext";

export default function AccountOverview() {

  const {
    user,
    remainingHours,
  } = useAuth();

  const {
    tasks,
  } = useTasks();

  const completed =
    tasks.filter(
      t =>
        t.completed
    ).length;

  const productivity =
    tasks.length === 0
      ? 100
      : Math.round(
          (
            completed /
            tasks.length
          ) * 100
        );

  const accountAge =
    localStorage.getItem(
      "capsule_account_created"
    ) ||
    new Date()
      .toLocaleDateString();

  localStorage.setItem(
    "capsule_account_created",
    accountAge
  );

  return (

    <div
      className="
        mt-8
        bg-slate-900
        rounded-3xl
        p-8
      "
    >

      <div className="flex items-center gap-3">

        <User className="text-cyan-400"/>

        <h2 className="text-2xl font-bold">

          Account Overview

        </h2>

      </div>

      <div
        className="
          grid
          grid-cols-3
          gap-6
          mt-8
        "
      >

        <Card
          icon={<Shield />}
          title="Account Status"
          value="Verified"
          color="text-green-400"
        />

        <Card
          icon={<Clock />}
          title="Session"
          value={`${remainingHours}h`}
          color="text-yellow-400"
        />

        <Card
          icon={<Database />}
          title="Stored Tasks"
          value={tasks.length}
          color="text-blue-400"
        />

        <Card
          icon={<Trophy />}
          title="Completed"
          value={completed}
          color="text-purple-400"
        />

        <Card
          icon={<Brain />}
          title="AI Score"
          value={`${productivity}%`}
          color="text-cyan-400"
        />

        <Card
          icon={<User />}
          title="Joined"
          value={accountAge}
          color="text-orange-400"
        />

      </div>

      <div
        className="
          mt-8
          bg-cyan-500/10
          border
          border-cyan-500/20
          rounded-2xl
          p-6
        "
      >

        <h3 className="font-bold text-cyan-400">

          Capsule AI Account Analysis

        </h3>

        <div className="mt-4 space-y-3">

          <p>
            • User:
            {" "}
            <strong>
              {user?.name}
            </strong>
          </p>

          <p>
            • Account Security:
            {" "}
            <strong>
              Secure
            </strong>
          </p>

          <p>
            • Productivity Rating:
            {" "}
            <strong>
              {
                productivity >= 80
                  ? "Excellent"
                  : productivity >= 50
                  ? "Good"
                  : "Needs Improvement"
              }
            </strong>
          </p>

          <p>
            • Recommendation:
            {" "}
            <strong>
              Continue maintaining your productivity streak.
            </strong>
          </p>

        </div>

      </div>

    </div>

  );

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
        className={`text-xl font-bold mt-2 ${color}`}
      >

        {value}

      </h2>

    </div>

  );

}