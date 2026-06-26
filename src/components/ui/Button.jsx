import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  className = "",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className={`
        bg-green-500
        hover:bg-green-600
        text-white
        font-semibold
        rounded-xl
        px-6
        py-3
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}