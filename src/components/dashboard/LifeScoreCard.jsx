import Card from "../ui/Card";
import { HeartPulse, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import { useAI } from "../../context/AIContext";

export default function LifeScoreCard() {
  const { lifeScore } = useAI();

  const getStatus = () => {
    if (lifeScore >= 85)
      return {
        text: "Excellent",
        color: "text-green-400",
        bg: "bg-green-500/20",
      };

    if (lifeScore >= 70)
      return {
        text: "Good",
        color: "text-blue-400",
        bg: "bg-blue-500/20",
      };

    if (lifeScore >= 50)
      return {
        text: "Moderate",
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
      };

    return {
      text: "Critical",
      color: "text-red-400",
      bg: "bg-red-500/20",
    };
  };

  const status = getStatus();

  return (
    <Card className="h-full">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold">
            Capsule AI
          </p>

          <h2 className="text-2xl font-bold mt-2">
            Life Score
          </h2>

        </div>

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            ${status.bg}
          `}
        >
          <HeartPulse
            size={32}
            className={status.color}
          />
        </div>

      </div>

      {/* Score */}

      <div className="mt-10 text-center">

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className={`text-7xl font-bold ${status.color}`}
        >
          {lifeScore}
        </motion.h1>

        <p
          className={`
            mt-4
            text-xl
            font-semibold
            ${status.color}
          `}
        >
          {status.text}
        </p>

      </div>

      {/* Progress */}

      <div className="mt-10">

        <div className="flex justify-between text-sm">

          <span className="text-slate-400">
            Productivity Index
          </span>

          <span className={status.color}>
            {lifeScore}%
          </span>

        </div>

        <div className="w-full h-3 bg-slate-800 rounded-full mt-3 overflow-hidden">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${lifeScore}%`,
            }}
            transition={{
              duration: 1.5,
            }}
            className={`
              h-full
              rounded-full
              ${
                lifeScore >= 85
                  ? "bg-green-500"
                  : lifeScore >= 70
                  ? "bg-blue-500"
                  : lifeScore >= 50
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }
            `}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center gap-3">

        <TrendingUp
          size={18}
          className="text-green-400"
        />

        <span className="text-slate-400 text-sm">
          AI calculated from completion rate,
          deadlines and risk analysis
        </span>

      </div>

    </Card>
  );
}