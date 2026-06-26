import Card from "../ui/Card";
import {
  PlusCircle,
  BrainCircuit,
  CalendarDays,
  BarChart3,
  ArrowRight
} from "lucide-react";

const actions = [
  {
    title: "Add Task",
    subtitle: "Create a new deadline",
    icon: PlusCircle,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Ask Capsule AI",
    subtitle: "Generate today's plan",
    icon: BrainCircuit,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Calendar",
    subtitle: "View upcoming events",
    icon: CalendarDays,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Analytics",
    subtitle: "Check productivity",
    icon: BarChart3,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

export default function QuickActions() {

  return (

    <Card>

      <h2 className="text-2xl font-bold mb-7">

        ⚡ Quick Actions

      </h2>

      <div className="grid grid-cols-2 gap-5">

        {actions.map((item, index) => {

          const Icon = item.icon;

          return (

            <button

              key={index}

              className="
                group
                rounded-2xl
                bg-slate-900
                border
                border-slate-700
                p-5
                text-left
                hover:border-green-500
                transition-all
              "

            >

              <div className="flex justify-between items-center">

                <div
                  className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}
                >
                  <Icon
                    className={item.color}
                    size={24}
                  />
                </div>

                <ArrowRight
                  size={18}
                  className="text-slate-500 group-hover:text-green-400 transition"
                />

              </div>

              <h3 className="mt-5 font-bold text-lg">

                {item.title}

              </h3>

              <p className="text-slate-400 mt-2 text-sm">

                {item.subtitle}

              </p>

            </button>

          );

        })}

      </div>

    </Card>

  );

}