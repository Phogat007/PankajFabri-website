"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Box, Zap, Shield, Wrench, Settings, Cpu, CircleDot, Layers, Bolt, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Transformer", "Enclosures", "Structural", "Components"];

const products = [
  {
    name: "Transformer Tanks",
    category: "Transformer",
    icon: Box,
    desc: "Heavy-duty oil-filled & dry-type tanks engineered for power distribution. Built to exact OEM specifications from 25kVA to 100MVA.",
    specs: ["MS / SS materials", "OEM certified", "25kVA–100MVA range", "IP55 protection"],
    tag: "Bestseller",
  },
  {
    name: "ERW Tube Radiators",
    category: "Transformer",
    icon: Cpu,
    desc: "Efficient heat dissipation units for transformer cooling. ERW welded tubes with fin construction for maximum thermal performance.",
    specs: ["ERW welded", "Fin & panel types", "Custom sizing", "Pressure tested"],
    tag: "High Demand",
  },
  {
    name: "Core Frame",
    category: "Transformer",
    icon: CircleDot,
    desc: "Precision transformer core assemblies with tight tolerances. Ensures optimal magnetic flux path in distribution transformers.",
    specs: ["CRGO compatible", "CNC machined", "Tight tolerances", "Custom designs"],
    tag: null,
  },
  {
    name: "Electric Panel Boxes",
    category: "Enclosures",
    icon: Zap,
    desc: "LT/HT panel enclosures with IP-rated protection. Powder-coated finish, cable entry management, and modular design.",
    specs: ["IP54 / IP65 rated", "Powder coated", "Cable glands", "DIN rail ready"],
    tag: null,
  },
  {
    name: "Metal Sheet Boxes",
    category: "Enclosures",
    icon: Layers,
    desc: "Precision-formed enclosures for industrial applications. Custom dimensions with seamless welding and surface treatments.",
    specs: ["Custom dimensions", "Seamless welds", "Surface treated", "1–5mm thickness"],
    tag: null,
  },
  {
    name: "HT/LT Cable Boxes",
    category: "Enclosures",
    icon: Wrench,
    desc: "High-tension cable termination enclosures designed for safe cable entry and management in transformers and switchgear.",
    specs: ["HT & LT variants", "Cable termination", "Gasket sealed", "Custom ports"],
    tag: null,
  },
  {
    name: "LT Cable Meter Box",
    category: "Enclosures",
    icon: Settings,
    desc: "Metering enclosures for distribution networks. Tamper-proof design with transparent window and locking system.",
    specs: ["Tamper-proof", "Transparent window", "Lockable", "Utility grade"],
    tag: null,
  },
  {
    name: "Racking System",
    category: "Structural",
    icon: Shield,
    desc: "Modular industrial storage and support structures. Bolted or welded assembly, powder coated, load-rated.",
    specs: ["Modular design", "Load rated", "Powder coated", "Bolted / welded"],
    tag: null,
  },
  {
    name: "Tie Rod & Core Bolt",
    category: "Components",
    icon: Bolt,
    desc: "High-strength fastening components for transformer assemblies. Precision machined from high-tensile steel.",
    specs: ["High-tensile steel", "Precision machined", "Various grades", "Custom lengths"],
    tag: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5 } }),
};

export default function ProductsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="relative bg-background min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block"
          >
            What We Make
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-display font-bold leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: "clamp(56px, 9vw, 120px)" }}
          >
            <span className="text-foreground">OUR</span>
            <br />
            <span className="text-gradient-orange">PRODUCTS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg max-w-xl"
          >
            Precision-engineered metal components built to OEM specifications for the power sector and heavy industry.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-6 sticky top-20 z-40 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-xs font-display tracking-wider transition-all duration-300 ${
                  active === cat
                    ? "bg-orange text-primary-foreground glow-orange"
                    : "glass-card text-muted-foreground hover:text-orange border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  layout
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col group relative overflow-hidden"
                >
                  {product.tag && (
                    <span className="absolute top-4 right-4 text-[10px] font-display tracking-widest text-orange border border-orange/30 px-2 py-0.5 rounded-full">
                      {product.tag}
                    </span>
                  )}

                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <Icon className="w-10 h-10 text-orange mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />

                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{product.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-orange shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-orange text-xs font-medium tracking-wide hover:gap-3 transition-all duration-300"
                  >
                    Request Quote <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-surface">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Need a <span className="text-gradient-orange">custom spec?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We manufacture to your exact drawings and tolerances. Send us your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-primary-foreground font-display text-sm tracking-widest rounded-lg hover:bg-orange-glow transition-colors duration-300 glow-orange"
            >
              Send Your Specs <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
