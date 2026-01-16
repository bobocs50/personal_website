import { motion } from "framer-motion";

const FloatingOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[120px]"
      animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.05] blur-[100px]"
      animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default FloatingOrbs;
