import {
  BellRing,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

import { useTasks }
from "../../context/TaskContext";

export default function SmartReminders() {

  const {
    tasks,
  } = useTasks();

  const reminders =
    generateReminders(
      tasks
    );

  return (

    <div
      className="
        bg-slate-900
        rounded-3xl
        p-6
      "
    >

      {/* Header */}

      <div className="flex items-center gap-3">

        <BellRing
          className="
            text-yellow-400
          "
        />

        <h2 className="text-2xl font-bold">

          Smart Reminders

        </h2>

      </div>

      <div className="mt-6 space-y-4">

        {
          reminders.length === 0 && (

            <div
              className="
                bg-green-500/10
                rounded-xl
                p-5
                flex
                items-center
                gap-3
              "
            >

              <CheckCircle
                className="
                  text-green-400
                "
              />

              <p>

                No reminders pending.

              </p>

            </div>

          )
        }

        {
          reminders.map(
            reminder => (

              <div
                key={
                  reminder.id
                }
                className="
                  bg-slate-800
                  rounded-2xl
                  p-5
                "
              >

                <div className="flex justify-between">

                  <div>

                    <div className="flex items-center gap-3">

                      <AlertCircle
                        className={
                          reminder.color
                        }
                      />

                      <h3 className="font-bold">

                        {reminder.title}

                      </h3>

                    </div>

                    <p className="text-slate-400 mt-2">

                      {reminder.message}

                    </p>

                  </div>

                  <div className="flex items-center gap-2">

                    <Clock
                      size={18}
                    />

                    <span>

                      {
                        reminder.time
                      }

                    </span>

                  </div>

                </div>

              </div>

            )
          )
        }

      </div>

    </div>

  );

}

function generateReminders(
  tasks
) {

  const reminders =
    [];

  const pending =
    tasks.filter(
      task =>
        !task.completed
    );

  pending.forEach(
    task => {

      const deadline =
        new Date(
          task.deadline
        );

      const now =
        new Date();

      const hours =
        Math.floor(
          (
            deadline -
            now
          ) /
          (
            1000 *
            60 *
            60
          )
        );

      if (
        hours <= 6
      ) {

        reminders.push({

          id:
            task.id,

          title:
            "Emergency Reminder",

          message:
            `${task.title} should be started immediately.`,

          time:
            `${hours}h`,

          color:
            "text-red-400",

        });

      }

      else if (
        hours <= 24
      ) {

        reminders.push({

          id:
            task.id,

          title:
            "Upcoming Deadline",

          message:
            `${task.title} deadline approaching.`,

          time:
            `${hours}h`,

          color:
            "text-yellow-400",

        });

      }

      else {

        reminders.push({

          id:
            task.id,

          title:
            "Scheduled Task",

          message:
            `${task.title} planned.`,

          time:
            `${hours}h`,

          color:
            "text-green-400",

        });

      }

    }
  );

  return reminders;

}