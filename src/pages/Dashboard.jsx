import Layout from "../components/layout/Layout";

import StatCard from "../components/ui/StatCard";

import TodaySurvivalPlan from "../components/dashboard/TodaySurvivalPlan";

import CriticalAlert from "../components/dashboard/CriticalAlert";

import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";

import RecentActivity from "../components/dashboard/RecentActivity";

import AIInsights from "../components/dashboard/AIInsights";

import AIStatusWidget from "../components/dashboard/AIStatusWidget";

import RiskMeter from "../components/dashboard/RiskMeter";

import CountdownCard from "../components/dashboard/CountdownCard";

import QuickActions from "../components/dashboard/QuickActions";

import HeroBrief from "../components/dashboard/HeroBrief";

import NotificationCenter from "../components/dashboard/NotificationCenter";

import SmartReminders from "../components/dashboard/SmartReminders";

import PredictionEngine from "../components/dashboard/PredictionEngine";

import SuccessDashboard from "../components/dashboard/SuccessDashboard";

import RescueMode from "../components/dashboard/RescueMode";

import {

Heart,

AlertTriangle,

Sparkles,

CircleCheck

} from "lucide-react";

export default function Dashboard(){

return(

<Layout>

<HeroBrief/>

<div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">

<StatCard
title="Life Score"
value="91"
description="Excellent Progress"
color="#22C55E"
progress={91}
icon={<Heart size={26}/>}
/>

<StatCard
title="Risk Level"
value="68%"
description="Needs Attention"
color="#EF4444"
progress={68}
icon={<AlertTriangle size={26}/>}
/>

<StatCard
title="AI Saved"
value="12"
description="Deadlines Prevented"
color="#3B82F6"
progress={80}
icon={<Sparkles size={26}/>}
/>

<StatCard
title="Completed"
value="8"
description="Tasks Finished"
color="#F59E0B"
progress={72}
icon={<CircleCheck size={26}/>}
/>


</div>

<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">

<div className="col-span-2">

<CriticalAlert/>
<NotificationCenter />
<SmartReminders />
<PredictionEngine />
<SuccessDashboard />
<RescueMode />

</div>

<div>

<TodaySurvivalPlan/>

</div>

</div>

<div className="grid grid-cols-4 gap-6 mt-8">

    <div className="col-span-2">

        <UpcomingDeadlines/>

    </div>

    <AIStatusWidget/>

    <QuickActions/>

</div>

<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">

    <AIInsights/>

    <RiskMeter/>

</div>

<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">

    <RecentActivity/>

    <CountdownCard/>

</div>

</Layout>

)

}