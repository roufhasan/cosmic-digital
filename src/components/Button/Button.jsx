import { motion } from "framer-motion";

const Button = ({ children }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="inline-block bg-lime-400 px-4 py-2.5 text-sm font-semibold text-black md:text-lg"
    >
      {children}
    </motion.button>
  );
};

export default Button;
