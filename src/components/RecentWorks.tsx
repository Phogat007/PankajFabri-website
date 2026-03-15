"use client";

import { motion } from "framer-motion";

const works = [
  { name: "Industrial Transformer Tank", category: "Transformer", h: "h-80" },
  { name: "Custom Panel Enclosure", category: "Panels", h: "h-64" },
  { name: "HT Cable Junction Box", category: "Cable Systems", h: "h-72" },
  { name: "Racking System Installation", category: "Storage", h: "h-72" },
  { name: "Radiator Assembly", category: "Transformer", h: "h-80" },
  { name: "Core Frame Manufacturing", category: "Components", h: "h-64" },
];

const RecentWorks = () => (
  <section id="work" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground">
          OUR WORK
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-0.5 bg-orange w-24 mt-4 origin-left"
        />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {works.map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`group relative ${w.h} rounded-2xl overflow-hidden cursor-pointer glass-card`}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-surface via-navy/50 to-bg-surface" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-8xl text-foreground/5">{String(i + 1).padStart(2, "0")}</span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-6">
              <span className="text-orange text-xs uppercase tracking-[0.2em]">{w.category}</span>
              <h3 className="font-display text-lg font-bold text-foreground mt-2">{w.name}</h3>
              <span className="text-orange text-sm mt-3 inline-flex items-center gap-1">
                View Details →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RecentWorks;
