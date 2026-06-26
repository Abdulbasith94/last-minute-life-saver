import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  onClick,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      onClick={onClick}
      className={`
        glass
        gradient-border
        card-hover

        relative

        rounded-[28px]

        P-8

        overflow-hidden

        ${className}
      `}
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-52
          h-52
          rounded-full
          bg-green-500/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          absolute
          -bottom-24
          -left-20
          w-44
          h-44
          rounded-full
          bg-blue-500/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}