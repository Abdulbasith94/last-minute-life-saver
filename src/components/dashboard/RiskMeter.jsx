import Card from "../ui/Card";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

import { useAI } from "../../context/AIContext";

export default function RiskMeter() {
  const { averageRisk } = useAI();

  const radius = 70;
  const stroke = 10;

  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (averageRisk / 100) *
      circumference;

  function getRiskLevel() {
    if (averageRisk >= 80)
      return {
        text: "Critical",
        color: "#EF4444",
      };

    if (averageRisk >= 60)
      return {
        text: "High",
        color: "#F97316",
      };

    if (averageRisk >= 40)
      return {
        text: "Moderate",
        color: "#EAB308",
      };

    return {
      text: "Low",
      color: "#22C55E",
    };
  }

  const risk =
    getRiskLevel();

  return (
    <Card className="flex flex-col items-center justify-center h-full">

      <div className="flex items-center gap-3 mb-8">

        <ShieldAlert
          size={26}
          style={{
            color:
              risk.color,
          }}
        />

        <h2 className="text-2xl font-bold">
          AI Risk Meter
        </h2>

      </div>

      <div className="relative">

        <svg
          width="180"
          height="180"
        >
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#1E293B"
            strokeWidth={stroke}
            fill="none"
          />

          <motion.circle
            cx="90"
            cy="90"
            r={radius}
            stroke={
              risk.color
            }
            strokeWidth={
              stroke
            }
            fill="none"
            strokeLinecap="round"
            strokeDasharray={
              circumference
            }
            initial={{
              strokeDashoffset:
                circumference,
            }}
            animate={{
              strokeDashoffset:
                offset,
            }}
            transition={{
              duration:
                1.8,
            }}
            transform="rotate(-90 90 90)"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <h1
            className="text-5xl font-bold"
            style={{
              color:
                risk.color,
            }}
          >
            {averageRisk}%
          </h1>

          <p className="text-slate-400 mt-2">
            {risk.text}
          </p>

        </div>

      </div>

      <div className="mt-8 w-full">

        <div className="flex justify-between">

          <span className="text-slate-400">
            Deadline Risk
          </span>

          <span
            style={{
              color:
                risk.color,
            }}
          >
            {risk.text}
          </span>

        </div>

        <p className="text-slate-500 text-sm mt-4 leading-7">

          Capsule AI analyzed all pending
          tasks and calculated the overall
          probability of deadline failure.

        </p>

      </div>

    </Card>
  );
}