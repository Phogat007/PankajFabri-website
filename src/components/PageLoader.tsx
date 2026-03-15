"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const PageLoader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ delay: 1.2, duration: 0.5 }}
    className="page-overlay flex items-center justify-center"
    onAnimationComplete={(def: { opacity?: number }) => {
      if (def.opacity === 0) {
        const el = document.querySelector(".page-overlay") as HTMLElement;
        if (el) el.style.display = "none";
      }
    }}
  >
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="flex items-center gap-3"
    >
      <Settings className="text-orange animate-spin" size={28} style={{ animationDuration: "3s" }} />
      <span className="font-display text-xl font-bold tracking-wider text-foreground">
        PANKAJ FABRICATORS
      </span>
    </motion.div>
  </motion.div>
);

export default PageLoader;
