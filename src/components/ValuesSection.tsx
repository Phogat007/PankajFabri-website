"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cog, Clock, HardHat } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We uphold the highest standards of honesty and transparency in every project." },
  { icon: Cog, title: "Automation", desc: "Leveraging cutting-edge CNC and laser technology for precision and efficiency." },
  { icon: Clock, title: "Tradition", desc: "Four decades of craftsmanship passed down through generations of expert engineers." },
  { icon: HardHat, title: "Safety", desc: "Zero-compromise approach to workplace and product safety standards." },
];

const ValuesSection = () => (
  <section className="py-32 bg-bg-surface relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold">
          <span className="text-foreground/20">BUILT ON </span>
          <span className="text-gradient-orange">PRINCIPLE</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-px bg-foreground/5 rounded-2xl overflow-hidden">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            style={{ perspective: "800px" }}
            className="glass-card glass-card-hover p-10 group"
          >
            <v.icon className="text-orange mb-6 group-hover:scale-110 transition-transform duration-300" size={36} />
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
