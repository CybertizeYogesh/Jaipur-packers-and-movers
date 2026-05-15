"use client";

import { motion } from "framer-motion";

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0 } },
  fadeLeft: { hidden: { opacity: 0, x: 34 }, show: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: -34 }, show: { opacity: 1, x: 0 } },
  zoomIn: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } }
};

export default function MotionReveal({
  as = "div",
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.65
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
