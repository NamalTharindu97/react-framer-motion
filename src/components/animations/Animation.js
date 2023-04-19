import { useState } from "react";
import "./animation.css";
import { motion } from "framer-motion";

export default function Animation() {
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);
  return (
    <div className="outer">
      {/* popup animation */}
      <motion.div
        className="squre"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        {" "}
      </motion.div>
      {/* rotate animation */}
      <motion.div
        className="squre"
        animate={{ rotate: rotate ? 360 : 0 }}
        transition={{ duration: 5 }}
        onClick={() => {
          setRotate(!rotate);
        }}
      >
        {" "}
      </motion.div>
      {/* move animation */}
      <motion.div
        className="squre"
        animate={{ x: move ? 200 : -200 }}
        transition={{ duration: 5 }}
        onClick={() => {
          setMove(!move);
        }}
      >
        {" "}
      </motion.div>
    </div>
  );
}
