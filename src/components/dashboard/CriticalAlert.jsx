import Card from "../ui/Card";
import { AlertTriangle } from "lucide-react";

import { useAI } from "../../context/AIContext";

export default function CriticalAlert() {
  const { criticalAlert } = useAI();

  if (!criticalAlert.exists) {
    return (
      <Card className="border border-green-500/30">

        <div className="flex items-center gap-3">

          <AlertTriangle className="text-green-400" />

          <h2 className="text-2xl font-bold">
            Capsule AI Alert
          </h2>

        </div>

        <div className="mt-8">

          <h1 className="text-4xl font-bold text-green-400">
            SAFE
          </h1>

          <p className="text-slate-400 mt-3">
            Capsule AI predicts no critical deadline
            failures at this time.
          </p>

        </div>

      </Card>
    );
  }

  const task = criticalAlert.task;

  const getRemainingHours = () => {
    const diff =
      new Date(task.deadline + "T23:59:59") -
      new Date();

    const hours = Math.max(
      0,
      Math.floor(diff / (1000 * 60 * 60))
    );

    return hours;
  };

  return (
    <Card className="border border-red-500/30">

      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <div className="flex items-center gap-3">

            <AlertTriangle className="text-red-400" />

            <h2 className="text-2xl font-bold">
              Critical AI Alert
            </h2>

          </div>

          <p className="text-slate-400 mt-2">
            AI predicts you may miss an important
            deadline.
          </p>

        </div>

        <div className="text-right">

          <p className="text-red-400 text-sm">
            Risk
          </p>

          <h1 className="text-5xl font-bold text-red-400">
            {criticalAlert.risk}%
          </h1>

        </div>

      </div>

      {/* Task Details */}

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">

          <span>Task</span>

          <strong>
            {task.title}
          </strong>

        </div>

        <div className="flex justify-between">

          <span>Deadline</span>

          <strong>
            {task.deadline}
          </strong>

        </div>

        <div className="flex justify-between">

          <span>
            Time Remaining
          </span>

          <strong>
            {getRemainingHours()} Hours
          </strong>

        </div>

        <div className="flex justify-between">

          <span>
            Estimated Work
          </span>

          <strong>
            {task.estimatedHours} Hours
          </strong>

        </div>

      </div>

      {/* AI Recommendation */}

      <div className="mt-8 rounded-xl bg-red-500/10 p-5 border border-red-500/20">

        <h3 className="font-bold text-red-400">
          AI Recommendation
        </h3>

        <p className="mt-2 text-slate-300">
          {
            criticalAlert.recommendation
          }
        </p>

      </div>

      {/* Success Prediction */}

      <div className="mt-6 flex justify-between items-center">

        <span className="text-slate-400">
          Success Probability
        </span>

        <span className="text-green-400 font-bold text-xl">
          {
            criticalAlert.estimatedSuccess
          }
          %
        </span>

      </div>

    </Card>
  );
}