import {
  Bell,
  AlertTriangle,
  CheckCircle,
  Trash2,
} from "lucide-react";

import {
  useNotifications,
} from "../../context/NotificationContext";

export default function NotificationCenter() {

  const {
    alerts,
    unread,
    markAsRead,
    clearAlerts,
  } = useNotifications();

  return (

    <div
      className="
        bg-slate-900
        rounded-3xl
        p-6
      "
    >

      {/* Header */}

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <Bell
            className="text-yellow-400"
          />

          <h2 className="text-2xl font-bold">

            Notification Center

          </h2>

        </div>

        <div className="flex gap-3">

          <div
            className="
              px-3
              py-1
              rounded-full
              bg-red-500/20
              text-red-400
              text-sm
            "
          >
            {unread} unread
          </div>

          <button
            onClick={clearAlerts}
            className="
              bg-red-500/10
              p-2
              rounded-lg
            "
          >
            <Trash2 size={18}/>
          </button>

        </div>

      </div>

      {/* Alerts */}

      <div className="mt-6 space-y-4">

        {alerts.length === 0 && (

          <div
            className="
              bg-green-500/10
              rounded-xl
              p-5
              text-center
            "
          >

            <CheckCircle
              className="
                mx-auto
                text-green-400
                mb-3
              "
            />

            <p>

              No emergency alerts detected.

            </p>

          </div>

        )}

        {alerts.map(
          alert => (

            <div
              key={alert.id}
              className="
                bg-slate-800
                rounded-2xl
                p-5
                border
                border-red-500/20
              "
            >

              <div className="flex justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <AlertTriangle
                      className="text-red-400"
                    />

                    <h3 className="font-bold">

                      {alert.title}

                    </h3>

                  </div>

                  <p className="mt-3">

                    {alert.task}

                  </p>

                  <p className="text-slate-400 mt-2">

                    {alert.message}

                  </p>

                </div>

                <div className="text-right">

                  <h2 className="text-red-400 text-3xl font-bold">

                    {alert.risk}%

                  </h2>

                  <button
                    onClick={() =>
                      markAsRead(
                        alert.id
                      )
                    }
                    className="
                      mt-3
                      text-sm
                      text-green-400
                    "
                  >
                    Mark Read
                  </button>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );

}