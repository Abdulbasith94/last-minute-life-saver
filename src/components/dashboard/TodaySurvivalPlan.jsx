import Card from "../ui/Card";

export default function TodaySurvivalPlan(){

return(

<Card>

<h2 className="text-3xl font-bold mb-8">

🧠 Today's Survival Plan

</h2>

<div className="space-y-7">

<div>

<strong>08:00 AM</strong>

<p className="text-slate-400">

Finish DTI Project

</p>

</div>

<div>

<strong>11:00 AM</strong>

<p className="text-slate-400">

AWS Assignment

</p>

</div>

<div>

<strong>03:00 PM</strong>

<p className="text-slate-400">

DBMS Revision

</p>

</div>

<div className="border-t border-slate-700 pt-5">

<p>

Estimated Success Rate

</p>

<h1 className="text-4xl text-green-400 font-bold">

92%

</h1>

</div>

</div>

</Card>

)

}