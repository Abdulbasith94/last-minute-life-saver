import Card from "../ui/Card";
import { BrainCircuit, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function AIStatusWidget() {

  return (

    <Card className="h-full">

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

      <div className="mt-8 space-y-5">

        <StatusRow

          title="Prediction Engine"

          status="Online"

          color="bg-green-500"

        />

        <StatusRow

          title="Task Analyzer"

          status="Monitoring"

          color="bg-blue-500"

        />

        <StatusRow

          title="Planning Engine"

          status="Active"

          color="bg-green-500"

        />

        <StatusRow

          title="AI Intelligence"

          status="Ready"

          color="bg-yellow-500"

        />

      </div>

      <motion.div

        initial={{ width: 0 }}

        animate={{ width: "100%" }}

        transition={{ duration: 2 }}

        className="mt-8"

      >

        <div className="flex justify-between text-sm">

          <span className="text-slate-400">

            System Health

          </span>

          <span className="text-green-400 font-semibold">

            98.7%

          </span>

        </div>

        <div className="w-full h-3 bg-slate-800 rounded-full mt-3 overflow-hidden">

          <div

            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"

            style={{ width: "98.7%" }}

          />

        </div>

      </motion.div>

    </Card>

  );

}

function StatusRow({

  title,

  status,

  color

}){

  return(

    <div className="flex justify-between items-center">

      <div className="flex items-center gap-3">

        <div className={`w-3 h-3 rounded-full ${color}`}></div>

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

  )

}