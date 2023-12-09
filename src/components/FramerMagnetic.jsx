import { useRef, useState } from "react";
import { motion } from "framer-motion";

function FramerMagnetic({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = (e) => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 100, damping: 30, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default FramerMagnetic;
