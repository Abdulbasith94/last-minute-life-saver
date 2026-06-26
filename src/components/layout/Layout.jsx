import Sidebar from "./Sidebar";
import Header from "../ui/Header";
import FloatingAIAssistant from "../dashboard/FloatingAIAssistant";

import { motion } from "framer-motion";

export default function Layout({ children }) {

  return (

    <div className="flex min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex-1 relative overflow-y-auto">

        {/* Background Glow */}

        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full bg-green-500/5 blur-[160px]" />

          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[140px]" />

          <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full bg-emerald-500/5 blur-[140px] -translate-x-1/2 -translate-y-1/2" />

        </div>

        {/* Main Content */}

        <motion.main

          initial={{ opacity:0 }}

          animate={{ opacity:1 }}

          transition={{ duration:.45 }}

          className="

          relative

          z-10

          w-full

          max-w-[1900px]

          mx-auto

          px-14

          xl:px-16

          2xl:px-20

          py-10

          "

        >

          <Header />

          <motion.div

            initial={{

              opacity:0,

              y:20

            }}

            animate={{

              opacity:1,

              y:0

            }}

            transition={{

              delay:.15,

              duration:.45

            }}

            className="mt-10"

          >

            {children}

          </motion.div>

        </motion.main>

      </div>

      <FloatingAIAssistant/>

    </div>

  );

}