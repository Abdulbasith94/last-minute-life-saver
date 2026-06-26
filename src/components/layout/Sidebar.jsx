import {
  LayoutDashboard,
  CheckSquare,
  BarChart3,
  Bot,
  User,
  HeartPulse,
  Sparkles,
  Trophy,
  ChevronRight
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    title: "AI Coach",
    path: "/chatbot",
    icon: Bot,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
];

export default function Sidebar() {

  return (

    <aside className="w-80 min-h-screen bg-[#081120] border-r border-slate-800 flex flex-col justify-between">

      {/* Logo */}

      <div>

        <div className="px-8 py-8 border-b border-slate-800">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-green">

              <HeartPulse size={30} className="text-white"/>

            </div>

            <div>

              <h1 className="text-2xl font-bold">

                Last Minute

              </h1>

              <h2 className="text-green-400 font-semibold">

                Life Saver

              </h2>

              <p className="text-slate-500 text-sm mt-1">

                Powered by Capsule AI

              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <div className="px-5 py-8 space-y-3">

          {navItems.map((item)=>{

            const Icon=item.icon;

            return(

              <NavLink

                key={item.title}

                to={item.path}

                className={({isActive})=>

                `

                flex

                items-center

                justify-between

                rounded-2xl

                px-5

                py-4

                transition-all

                duration-300

                ${

                  isActive

                  ?

                  "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-green"

                  :

                  "hover:bg-slate-800 text-slate-300"

                }

                `

                }

              >

                <div className="flex items-center gap-4">

                  <Icon size={22}/>

                  <span className="font-medium">

                    {item.title}

                  </span>

                </div>

                <ChevronRight size={18}/>

              </NavLink>

            )

          })}

        </div>

      </div>

      {/* Bottom */}

      <div className="px-5 pb-6">

        <motion.div

          whileHover={{

            scale:1.02

          }}

          className="glass rounded-3xl p-6"

        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-400">

                Life Score

              </p>

              <h2 className="text-5xl font-bold text-green-400 mt-2">

                91

              </h2>

            </div>

            <Sparkles

              size={32}

              className="text-green-400"

            />

          </div>

          <div className="mt-6">

            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

              <div

                className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"

                style={{

                  width:"91%"

                }}

              />

            </div>

            <p className="mt-4 text-green-400">

              Excellent Progress

            </p>

          </div>

        </motion.div>

        {/* User */}

        <div className="glass rounded-3xl mt-6 p-5">

          <div className="flex items-center gap-4">

            <img

              src="https://ui-avatars.com/api/?name=Abdul+Basith&background=22C55E&color=fff"

              className="w-14 h-14 rounded-2xl"

            />

            <div>

              <h3 className="font-semibold">

                Abdul Basith

              </h3>

              <p className="text-slate-500 text-sm">

                Student Developer

              </p>

            </div>

          </div>

        </div>

        <div className="mt-6 text-center">

          <Trophy

            className="mx-auto text-yellow-400"

            size={24}

          />

          <p className="text-slate-500 mt-2 text-sm">

            Version 1.0.0

          </p>

        </div>

      </div>

    </aside>

  );

}