import Card from "../ui/Card";
import { Sparkles } from "lucide-react";

export default function AIInsights(){

return(

<Card>

<div className="flex items-center gap-3">

<Sparkles className="text-green-400"/>

<h2 className="text-2xl font-bold">

AI Insights

</h2>

</div>

<div className="mt-6 space-y-5">

<p>

🎯 You perform best between 8 AM and 12 PM.

</p>

<p>

⚡ Starting your DTI Project today increases your success probability to 92%.

</p>

<p>

📈 You completed 18% more tasks than last week.

</p>

<p>

💡 AI Suggestion:

Avoid multitasking tonight.

</p>

</div>

</Card>

)

}