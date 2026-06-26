import Card from "../ui/Card";
import {
  Brain,
  AlertTriangle,
  Clock3,
  Target,
  ArrowRight
} from "lucide-react";

export default function HeroBrief() {

  return (

    <Card className="mb-8">

      <div className="flex justify-between items-start">

        {/* LEFT */}

        <div className="max-w-3xl">

          <div className="flex items-center gap-3">

            <Brain
              className="text-green-400"
              size={28}
            />

            <p className="uppercase tracking-[0.25em] text-green-400 text-sm font-semibold">

              Today's AI Brief

            </p>

          </div>

          <h1 className="text-4xl font-bold mt-5">

            🔥 Highest Priority

          </h1>

          <h2 className="text-3xl font-bold text-red-400 mt-4">

            DTI Project Submission

          </h2>

          <p className="text-slate-400 mt-6 text-lg leading-8">

            Capsule AI predicts this task has the highest probability of being missed unless work begins immediately.

          </p>

        </div>

        {/* RIGHT */}

        <div className="text-right">

          <div className="glass rounded-3xl px-8 py-7">

            <p className="text-slate-400">

              Success Probability

            </p>

            <h2 className="text-6xl font-bold text-green-400 mt-3">

              92%

            </h2>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="glass rounded-2xl p-5">

          <AlertTriangle
            className="text-red-400 mb-4"
            size={26}
          />

          <p className="text-slate-400">

            Risk

          </p>

          <h2 className="text-3xl font-bold text-red-400 mt-2">

            85%

          </h2>

        </div>

        <div className="glass rounded-2xl p-5">

          <Clock3
            className="text-yellow-400 mb-4"
            size={26}
          />

          <p className="text-slate-400">

            Time Left

          </p>

          <h2 className="text-3xl font-bold mt-2">

            11h 32m

          </h2>

        </div>

        <div className="glass rounded-2xl p-5">

          <Target
            className="text-green-400 mb-4"
            size={26}
          />

          <p className="text-slate-400">

            AI Recommendation

          </p>

          <div className="flex justify-between items-center mt-2">

            <h2 className="font-bold text-green-400">

              START NOW

            </h2>

            <ArrowRight
              className="text-green-400"
            />

          </div>

        </div>

      </div>

    </Card>

  );

}