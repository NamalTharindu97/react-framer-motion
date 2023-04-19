import "./animation.css";
import { motion } from "framer-motion";

export default function Animation() {
  return (
    <div className="outer">
      {/* popup animation */}
      <motion.div
        className="squre"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {" "}
      </motion.div>
    </div>
  );
}
