import Layout from "../components/layout/Layout";

import UserStatistics
from "../components/profile/UserStatistics";

import AccountOverview
from "../components/profile/AccountOverview";

import {
  User,
  Mail,
  Shield,
  Award,
  Activity,
} from "lucide-react";

import {
  useAuth,
} from "../context/AuthContext";

import {
  useTasks,
} from "../context/TaskContext";

export default function Profile() {

  const {
    user,
    remainingHours,
  } =
    useAuth();

  const {
    tasks,
  } =
    useTasks();

  const completed =
    tasks.filter(
      t =>
        t.completed
    ).length;

  const pending =
    tasks.length -
    completed;

  const success =
    tasks.length === 0
      ? 100
      : Math.round(
          (
            completed /
            tasks.length
          ) * 100
        );

  return (

    <Layout>

      <h1 className="text-4xl font-bold mb-8">

        User Profile

      </h1>

      <div
        className="
          bg-slate-900
          rounded-3xl
          p-8
        "
      >

        <div className="flex items-center gap-6">

          <img
            src={`https://ui-avatars.com/api/?name=${
              user?.name || "User"
            }&background=22C55E&color=fff`}
            className="
              w-32
              h-32
              rounded-full
            "
          />

          <div>

            <h2 className="text-3xl font-bold">

              {user?.name}

            </h2>

            <p className="text-slate-400 mt-2">

              {user?.email}

            </p>

            <div className="flex gap-4 mt-5">

              <div className="flex items-center gap-2">

                <Shield className="text-green-400"/>

                <span>

                  Verified

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div
        className="
          grid
          grid-cols-4
          gap-6
          mt-8
        "
      >

        <StatCard
          icon={<Activity/>}
          title="Tasks"
          value={tasks.length}
          color="text-blue-400"
        />

        <StatCard
          icon={<Award/>}
          title="Completed"
          value={completed}
          color="text-green-400"
        />

        <StatCard
          icon={<Mail/>}
          title="Pending"
          value={pending}
          color="text-yellow-400"
        />

        <StatCard
          icon={<User/>}
          title="Success"
          value={`${success}%`}
          color="text-purple-400"
        />

      </div>

      <div
        className="
          mt-8
          bg-slate-900
          rounded-3xl
          p-8
        "
      >

        <h2 className="text-2xl font-bold">

          Capsule AI Profile Summary

        </h2>

        <div className="mt-6 space-y-4">

          <p>
            • User:
            {" "}
            <strong>
              {user?.name}
            </strong>
          </p>

          <p>
            • Productivity Score:
            {" "}
            <strong>
              {success}%
            </strong>
          </p>

          <p>
            • Session Remaining:
            {" "}
            <strong>
              {remainingHours}
              {" "}
              hours
            </strong>
          </p>

          <p>
            • Current Status:
            {" "}
            <strong>
              {
                success >= 80
                ? "Elite Performer"
                : success >= 50
                ? "Consistent Performer"
                : "Recovery Mode"
              }
            </strong>
          </p>

        </div>

      </div>

      <UserStatistics />

      <AccountOverview />

    </Layout>

  );

}

function StatCard({
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
        p-6
      "
    >

      <div className={color}>

        {icon}

      </div>

      <p className="text-slate-400 mt-4">

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