import { useState } from "react";
import "./animation.css";
import { motion } from "framer-motion";

export default function Animation() {
  const [rotate, setRotate] = useState(false);
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
      {/* rotate animation */}
      <motion.div
        className="squre"
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => {
          setRotate(!rotate);
        }}
      >
        {" "}
      </motion.div>
    </div>
  );
}
