import {
  Bell,
  CalendarDays,
  Target,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Header() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-10"
    >
      {/* Top */}

      <div className="flex justify-between items-start">

        <div>
          <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
            {greeting}, Abdul 👋
          </h1>

          <p className="text-slate-400 mt-3 text-lg max-w-3xl">
            Welcome back. Capsule AI analyzed your schedule and prepared today's productivity mission.
          </p>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-8">

          {/* Notification */}

          <button
            className="
              glass
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              relative
              hover:scale-105
              transition
            "
          >
            <Bell />

            <span
              className="
                absolute
                top-2
                right-2
                w-3
                h-3
                rounded-full
                bg-red-500
              "
            />
          </button>

          {/* Date */}

          <div
            className="
            glass
            h-14
            min-w-[220px]
            rounded-2xl
            px-7
            flex
            items-center
            justify-center
            gap-3
            "
          >
            <CalendarDays size={18} />

            <span className="text-sm font-medium">
              {today}
            </span>
          </div>

          {/* Profile */}

          <div className="relative">

            <img
              src="https://ui-avatars.com/api/?name=Abdul+Basith&background=22C55E&color=fff"
              className="
                w-14
                h-14
                rounded-2xl
                border-2
                border-green-500
              "
            />

            <div
              className="
                absolute
                bottom-0
                right-0
                w-4
                h-4
                rounded-full
                bg-green-500
                border-2
                border-slate-900
              "
            />

          </div>

        </div>

      </div>

      {/* Today's Focus */}

      <div
        className="
          mt-10
          glass
          rounded-3xl
          p-8
          flex
          justify-between
          items-center
        "
      >
        <div>

          <div className="flex items-center gap-3">
            <Target className="text-red-400" />

            <h2 className="text-3xl font-bold">
              Today's Focus
            </h2>
          </div>

          <p className="text-slate-400 mt-4">
            Highest Priority
          </p>

          <h3 className="text-2xl font-bold mt-2">
            Finish DTI Project
          </h3>

          <p className="text-green-400 mt-4">
            Estimated Success • 92%
          </p>

        </div>

        <div className="text-right">

          <div className="flex items-center gap-2 justify-end">
            <Sparkles className="text-yellow-400" />

            <span className="font-semibold">
              Capsule Recommendation
            </span>
          </div>

          <h2 className="text-4xl font-bold mt-5 text-red-400">
            START NOW
          </h2>

          <p className="text-slate-400 mt-3">
            Begin within the next
          </p>

          <h3 className="text-2xl font-bold mt-2">
            2 Hours
          </h3>

        </div>

      </div>

    </motion.div>
  );
}