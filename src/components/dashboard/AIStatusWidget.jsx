import Card from "../ui/Card";
import {
  BrainCircuit,
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";

import { useAI } from "../../context/AIContext";

export default function AIStatusWidget() {
  const { system } =
    useAI();

  return (
    <Card className="h-full">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <p className="text-green-400 uppercase tracking-widest text-sm font-semibold">
            Capsule AI
          </p>

          <h2 className="text-3xl font-bold mt-2">
            AI Status
          </h2>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center">

          <BrainCircuit
            size={32}
            className="text-green-400"
          />

        </div>

      </div>

      {/* Status Rows */}

      <div className="mt-8 space-y-5">

        <StatusRow
          title="Prediction Engine"
          status={
            system.predictionEngine
          }
          color="bg-green-500"
        />

        <StatusRow
          title="Task Analyzer"
          status={
            system.taskAnalyzer
          }
          color="bg-blue-500"
        />

        <StatusRow
          title="Planning Engine"
          status={
            system.planningEngine
          }
          color="bg-green-500"
        />

        <StatusRow
          title="AI Intelligence"
          status={
            system.intelligence
          }
          color="bg-yellow-500"
        />

      </div>

      {/* System Health */}

      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: "100%",
        }}
        transition={{
          duration: 2,
        }}
        className="mt-8"
      >

        <div className="flex justify-between text-sm">

          <span className="text-slate-400">
            System Health
          </span>

          <span className="text-green-400 font-semibold">
            {system.health}%
          </span>

        </div>

        <div className="w-full h-3 bg-slate-800 rounded-full mt-3 overflow-hidden">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${system.health}%`,
            }}
            transition={{
              duration: 2,
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-green-500
              to-emerald-400
            "
          />

        </div>

      </motion.div>

      {/* Footer */}

      <div className="mt-6 border-t border-slate-700 pt-4">

        <p className="text-slate-500 text-sm">

          Capsule AI is actively monitoring
          tasks, deadlines, risk levels,
          and productivity metrics.

        </p>

      </div>

    </Card>
  );
}

function StatusRow({
  title,
  status,
  color,
}) {
  return (
    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">

        <div
          className={`w-3 h-3 rounded-full ${color}`}
        />

        <span>
          {title}
        </span>

      </div>

      <div className="flex items-center gap-2">

        <Activity
          size={16}
          className="text-green-400"
        />

        <span className="text-slate-400 text-sm">
          {status}
        </span>

      </div>

    </div>
  );
}