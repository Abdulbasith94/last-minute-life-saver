import Card from "../ui/Card";
import { AlertTriangle } from "lucide-react";

export default function CriticalAlert(){

return(

<Card className="border border-red-500/30">

<div className="flex justify-between items-start">

<div>

<div className="flex items-center gap-3">

<AlertTriangle className="text-red-400"/>

<h2 className="text-2xl font-bold">

Critical AI Alert

</h2>

</div>

<p className="text-slate-400 mt-2">

AI predicts you may miss an important deadline.

</p>

</div>

<div className="text-right">

<p className="text-red-400 text-sm">

Risk

</p>

<h1 className="text-5xl font-bold text-red-400">

85%

</h1>

</div>

</div>

<div className="mt-8 space-y-4">

<div className="flex justify-between">

<span>Task</span>

<strong>DTI Project</strong>

</div>

<div className="flex justify-between">

<span>Deadline</span>

<strong>Tomorrow</strong>

</div>

<div className="flex justify-between">

<span>Time Remaining</span>

<strong>12 Hours</strong>

</div>

<div className="flex justify-between">

<span>Estimated Work</span>

<strong>5 Hours</strong>

</div>

</div>

<div className="mt-8 rounded-xl bg-red-500/10 p-5 border border-red-500/20">

<h3 className="font-bold text-red-400">

AI Recommendation

</h3>

<p className="mt-2 text-slate-300">

Start your DTI Project within the next 2 hours to maximize your chance of finishing before the deadline.

</p>

</div>

</Card>

)

}