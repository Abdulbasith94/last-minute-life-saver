import {
  Trophy,
  Crown,
  Medal,
  Flame,
} from "lucide-react";

import {
  useTasks,
} from "../../context/TaskContext";

export default function Leaderboard() {

  const {
    tasks,
  } = useTasks();

  const rankings =
    generateRankings(
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

          Productivity Leaderboard

        </h2>

      </div>

      {/* Top Performer */}

      <div
        className="
          mt-8
          bg-gradient-to-r
          from-yellow-500/10
          to-orange-500/10
          border
          border-yellow-500/20
          rounded-2xl
          p-6
        "
      >

        <div className="flex items-center gap-4">

          <Crown
            size={40}
            className="
              text-yellow-400
            "
          />

          <div>

            <h2 className="text-2xl font-bold">

              {rankings[0].name}

            </h2>

            <p className="text-slate-400">

              Productivity Champion

            </p>

          </div>

        </div>

      </div>

      {/* Rankings */}

      <div className="mt-8 space-y-4">

        {rankings.map(
          (
            user,
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

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-slate-700
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >

                  #{index + 1}

                </div>

                <div>

                  <h3 className="font-bold">

                    {user.name}

                  </h3>

                  <p className="text-slate-400">

                    {user.role}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-6">

                <div className="flex items-center gap-2">

                  <Flame
                    className="
                      text-orange-400
                    "
                  />

                  <span>

                    {user.streak}

                  </span>

                </div>

                <div className="flex items-center gap-2">

                  <Medal
                    className="
                      text-yellow-400
                    "
                  />

                  <span>

                    {user.score}

                  </span>

                </div>

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

          Capsule AI Ranking Analysis

        </h3>

        <p className="mt-3 text-slate-300">

          Your current productivity score
          places you in the top performance
          category. Maintain your streak
          to preserve your ranking.

        </p>

      </div>

    </div>

  );

}

function generateRankings(
  tasks
) {

  const completed =
    tasks.filter(
      t =>
        t.completed
    ).length;

  return [

    {
      name:
        "Abdul Basith",
      role:
        "You",
      streak:
        completed * 2 + 1,
      score:
        completed * 100 + 500,
    },

    {
      name:
        "Capsule User A",
      role:
        "Student",
      streak:
        8,
      score:
        920,
    },

    {
      name:
        "Capsule User B",
      role:
        "Developer",
      streak:
        6,
      score:
        780,
    },

    {
      name:
        "Capsule User C",
      role:
        "Researcher",
      streak:
        5,
      score:
        650,
    },

  ].sort(
    (
      a,
      b
    ) =>
      b.score -
      a.score
  );

}