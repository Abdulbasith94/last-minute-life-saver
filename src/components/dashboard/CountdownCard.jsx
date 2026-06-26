import Card from "../ui/Card";
import { Timer } from "lucide-react";
import { useEffect, useState } from "react";

export default function CountdownCard() {

    const deadline = new Date();

    deadline.setHours(deadline.getHours() + 11);
    deadline.setMinutes(deadline.getMinutes() + 32);

    const [timeLeft, setTimeLeft] = useState(getRemaining());

    function getRemaining() {

        const diff = deadline - new Date();

        if (diff <= 0) {

            return {
                hours: 0,
                minutes: 0,
                seconds: 0,
            };

        }

        return {

            hours: Math.floor(diff / (1000 * 60 * 60)),

            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),

            seconds: Math.floor((diff % (1000 * 60)) / 1000),

        };

    }

    useEffect(() => {

        const interval = setInterval(() => {

            setTimeLeft(getRemaining());

        },1000);

        return ()=>clearInterval(interval);

    },[]);

    return(

        <Card>

            <div className="flex items-center gap-3">

                <Timer

                    className="text-yellow-400"

                    size={28}

                />

                <h2 className="text-2xl font-bold">

                    Live Countdown

                </h2>

            </div>

            <p className="text-slate-400 mt-3">

                Time remaining for your highest priority task.

            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">

                <TimeBox

                    value={timeLeft.hours}

                    label="Hours"

                />

                <TimeBox

                    value={timeLeft.minutes}

                    label="Minutes"

                />

                <TimeBox

                    value={timeLeft.seconds}

                    label="Seconds"

                />

            </div>

            <div className="mt-8 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 p-4">

                <p className="text-yellow-300 font-semibold">

                    Next Deadline

                </p>

                <h3 className="text-xl font-bold mt-2">

                    DTI Project Submission

                </h3>

            </div>

        </Card>

    );

}

function TimeBox({

    value,

    label

}){

    return(

        <div className="rounded-2xl bg-slate-800 p-5 text-center">

            <h1 className="text-4xl font-bold text-yellow-400">

                {String(value).padStart(2,"0")}

            </h1>

            <p className="text-slate-400 mt-2">

                {label}

            </p>

        </div>

    )

}