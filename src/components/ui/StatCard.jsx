import Card from "./Card";
import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  description,
  color,
  icon,
  progress = 75,
}) {
  return (
    <Card className="min-h-[260px]">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">

            {title}

          </p>

        </div>

        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            backgroundColor: `${color}20`,
            color: color,
          }}
        >
          {icon}
        </div>

      </div>

      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-5xl font-extrabold mt-8"
        style={{ color }}
      >
        {value}
      </motion.h1>

      <p className="text-slate-400 mt-3">

        {description}

      </p>

      <div className="mt-6">

        <div className="flex justify-between text-sm">

          <span className="text-green-400">

            ↑ +6 Today

          </span>

          <span className="text-slate-500">

            {progress}%

          </span>

        </div>

        <div className="w-full h-2 bg-slate-800 rounded-full mt-3 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="h-full rounded-full"
            style={{
              background: color,
            }}
          />

        </div>

      </div>

    </Card>
  );
}