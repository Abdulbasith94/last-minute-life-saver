import {
  Trophy,
  Flame,
  Medal,
  Star,
} from "lucide-react";

import {
  useTasks,
} from "../../context/TaskContext";

export default function AchievementSystem() {

  const {
    tasks,
  } = useTasks();

  const achievements =
    calculateAchievements(
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

        <Trophy
          className="
            text-yellow-400
          "
        />

        <h2 className="text-2xl font-bold">

          Achievements & Streaks

        </h2>

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

        <StatCard
          icon={<Flame />}
          title="Current Streak"
          value={`${achievements.streak} Days`}
          color="text-orange-400"
        />

        <StatCard
          icon={<Medal />}
          title="Achievements"
          value={achievements.total}
          color="text-green-400"
        />

        <StatCard
          icon={<Star />}
          title="Level"
          value={achievements.level}
          color="text-yellow-400"
        />

      </div>

      {/* Achievement List */}

      <div className="mt-8 space-y-4">

        {achievements.list.map(
          (
            achievement,
            index
          ) => (

            <div
              key={index}
              className="
                bg-slate-800
                rounded-2xl
                p-5
                flex
                justify-between
                items-center
              "
            >

              <div>

                <h3 className="font-bold">

                  {achievement.name}

                </h3>

                <p className="text-slate-400 mt-2">

                  {achievement.description}

                </p>

              </div>

              <div className="text-3xl">

                {achievement.icon}

              </div>

            </div>

          )
        )}

      </div>

      {/* AI Analysis */}

      <div
        className="
          mt-8
          bg-yellow-500/10
          border
          border-yellow-500/20
          rounded-2xl
          p-5
        "
      >

        <h3 className="font-bold text-yellow-400">

          Capsule AI Motivation

        </h3>

        <p className="mt-3 text-slate-300">

          You have unlocked
          {` ${achievements.total} `}
          achievements.
          Continue maintaining your
          productivity streak to
          unlock higher levels.

        </p>

      </div>

    </div>

  );

}

function calculateAchievements(
  tasks
) {

  const completed =
    tasks.filter(
      task =>
        task.completed
    ).length;

  const streak =
    Math.max(
      1,
      completed * 2
    );

  const list = [];

  if (
    completed >= 1
  ) {

    list.push({

      name:
        "First Victory",

      description:
        "Completed your first task",

      icon:
        "🥉",

    });

  }

  if (
    completed >= 5
  ) {

    list.push({

      name:
        "Productivity Master",

      description:
        "Completed five tasks",

      icon:
        "🥈",

    });

  }

  if (
    completed >= 10
  ) {

    list.push({

      name:
        "Legend",

      description:
        "Completed ten tasks",

      icon:
        "🥇",

    });

  }

  return {

    streak,

    total:
      list.length,

    level:
      Math.max(
        1,
        Math.floor(
          completed /
          3
        ) + 1
      ),

    list,

  };

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