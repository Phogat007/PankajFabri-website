"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const CTABanner = () => {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      if (dist < 150) {
        setOffset({
          x: (e.clientX - cx) * 0.15,
          y: (e.clientY - cy) * 0.15,
        });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="py-40 relative overflow-hidden flex items-center justify-center">
      {/* Ambient orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-orange/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-7xl font-bold text-foreground mb-6"
        >
          START YOUR PROJECT
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-10 max-w-lg mx-auto"
        >
          Let's discuss your requirements and deliver precision-engineered solutions.
        </motion.p>

        {/* Contact pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["+91 141 XXX XXXX", "info@pankajfabricators.com", "Jaipur, India"].map((t) => (
            <span key={t} className="glass-card px-4 py-2 rounded-full text-sm text-muted-foreground">{t}</span>
          ))}
        </motion.div>

        <motion.a
          ref={btnRef}
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          className="inline-block px-12 py-5 bg-orange text-primary-foreground font-display text-sm tracking-widest rounded-lg hover:bg-orange-glow transition-colors duration-300 glow-orange"
        >
          GET IN TOUCH
        </motion.a>
      </div>
    </section>
  );
};

export default CTABanner;
