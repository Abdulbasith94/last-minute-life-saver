import Card from "../ui/Card";

const deadlines=[

{

task:"DTI Project",

day:"Tomorrow",

color:"bg-red-500"

},

{

task:"AWS Assignment",

day:"2 Days",

color:"bg-yellow-500"

},

{

task:"DBMS Exam",

day:"4 Days",

color:"bg-green-500"

}

];

export default function UpcomingDeadlines(){

return(

<Card>

<h2 className="text-2xl font-bold mb-6">
    
Priority Deadlines

</h2>

<div className="space-y-5">

{

deadlines.map((item,index)=>(

<div

key={index}

className="flex justify-between items-center"

>

<div className="flex items-center gap-3">

<div className={`w-3 h-3 rounded-full ${item.color}`}></div>

<p>

{item.task}

</p>

</div>

<span className="text-slate-400">

{item.day}

</span>

</div>

))

}

</div>

</Card>

)

}