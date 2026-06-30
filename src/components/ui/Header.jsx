import { useState } from "react";

import {
  Bell,
  CalendarDays,
  Target,
  Sparkles,
  AlertTriangle,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate }
from "react-router-dom";

import {
  useNotifications,
} from "../../context/NotificationContext";

export default function Header() {

  const navigate =
    useNavigate();

  const {
    unread,
    alerts,
  } =
    useNotifications();

  const [
    showNotifications,
    setShowNotifications,
  ] =
    useState(false);

  const hour =
    new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const today =
    new Date().toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="mb-10 relative"
    >

      {/* Header */}

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

        <div className="flex items-center gap-5">

          {/* Notification */}

          <button
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
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

            {unread > 0 && (

              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  w-6
                  h-6
                  rounded-full
                  bg-red-500
                  text-white
                  text-xs
                  flex
                  items-center
                  justify-center
                  font-bold
                "
              >

                {unread}

              </span>

            )}

          </button>

          {/* Settings */}

          <button
            onClick={() =>
              navigate(
                "/settings"
              )
            }
            className="
              glass
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              hover:scale-105
              transition
            "
          >

            <Settings />

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

            <CalendarDays
              size={18}
            />

            <span className="text-sm font-medium">

              {today}

            </span>

          </div>

          {/* Profile */}

          <button
            onClick={() =>
              navigate(
                "/profile"
              )
            }
            className="relative"
          >

            <img
              src="https://ui-avatars.com/api/?name=Abdul+Basith&background=22C55E&color=fff"
              className="
                w-14
                h-14
                rounded-2xl
                border-2
                border-green-500
                hover:scale-105
                transition
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

          </button>

        </div>

      </div>

      {/* Notification Popup */}

      {showNotifications && (

        <div
          className="
            absolute
            top-20
            right-0
            w-[420px]
            bg-slate-900
            border
            border-slate-700
            rounded-3xl
            p-6
            z-50
            shadow-2xl
          "
        >

          <div className="flex justify-between items-center">

            <h2 className="text-xl font-bold">

              Notifications

            </h2>

            <span className="text-red-400">

              {unread} unread

            </span>

          </div>

          <div className="mt-5 space-y-4">

            {alerts.length === 0 && (

              <p className="text-slate-400">

                No notifications

              </p>

            )}

            {alerts.map(
              alert => (

                <div
                  key={alert.id}
                  className="
                    bg-slate-800
                    rounded-xl
                    p-4
                  "
                >

                  <div className="flex gap-3">

                    <AlertTriangle
                      className="
                        text-red-400
                      "
                    />

                    <div>

                      <h3 className="font-semibold">

                        {alert.title}

                      </h3>

                      <p className="text-slate-400 text-sm mt-2">

                        {alert.task}

                      </p>

                      <p className="text-slate-500 text-xs mt-2">

                        {alert.message}

                      </p>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      )}

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