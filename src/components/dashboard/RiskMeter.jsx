import Card from "../ui/Card";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

export default function RiskMeter() {

    const risk = 85;

    const radius = 70;
    const stroke = 10;

    const circumference = 2 * Math.PI * radius;

    const offset =
        circumference -
        (risk / 100) * circumference;

    return (

        <Card className="flex flex-col items-center justify-center h-full">

            <div className="flex items-center gap-3 mb-8">

                <ShieldAlert
                    className="text-red-400"
                    size={26}
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

                        stroke="#EF4444"

                        strokeWidth={stroke}

                        fill="none"

                        strokeLinecap="round"

                        strokeDasharray={circumference}

                        initial={{
                            strokeDashoffset: circumference,
                        }}

                        animate={{
                            strokeDashoffset: offset,
                        }}

                        transition={{
                            duration: 1.8,
                        }}

                        transform="rotate(-90 90 90)"

                    />

                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                    <h1 className="text-5xl font-bold text-red-400">

                        {risk}%

                    </h1>

                    <p className="text-slate-400 mt-2">

                        High Risk

                    </p>

                </div>

            </div>

            <div className="mt-8 w-full">

                <div className="flex justify-between">

                    <span className="text-slate-400">

                        Deadline Risk

                    </span>

                    <span className="text-red-400">

                        Critical

                    </span>

                </div>

                <p className="text-slate-500 text-sm mt-4 leading-7">

                    AI estimates an 85% probability of missing your
                    next deadline if no action is taken today.

                </p>

            </div>

        </Card>

    );

}