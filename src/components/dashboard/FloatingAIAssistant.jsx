import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingAIAssistant() {

  return (

    <motion.button

      initial={{ scale: 0 }}

      animate={{ scale: 1 }}

      whileHover={{
        scale: 1.08,
        rotate: 5,
      }}

      whileTap={{
        scale: 0.95,
      }}

      transition={{
        duration: .45,
      }}

      className="
      fixed
      bottom-8
      right-8
      z-50
      "

    >

      <div
        className="
        relative

        w-20
        h-20

        rounded-full

        bg-gradient-to-r

        from-green-500

        to-emerald-400

        shadow-green

        flex

        items-center

        justify-center
        "
      >

        <Bot

          size={34}

          className="text-white"

        />

        <motion.div

          animate={{

            scale:[1,1.25,1],

            opacity:[.5,.2,.5]

          }}

          transition={{

            repeat:Infinity,

            duration:2

          }}

          className="
          absolute
          inset-0
          rounded-full
          border
          border-green-400
          "
        />

      </div>

      <div
        className="
        absolute

        -top-3

        -right-2

        w-8

        h-8

        rounded-full

        bg-red-500

        flex

        items-center

        justify-center

        text-white

        text-sm

        font-bold
        "
      >

        <Sparkles size={16}/>

      </div>

    </motion.button>

  );

}