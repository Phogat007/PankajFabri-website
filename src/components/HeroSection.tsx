"use client";

import { motion } from "framer-motion";

const heroWords = [
  { text: "PRECISION", className: "text-foreground" },
  { text: "METAL", className: "text-shimmer-orange" },
  { text: "FABRICATION", className: "text-foreground" },
];

const tickerItems = [
  "TRANSFORMER TANKS", "LASER CUTTING", "METAL PANELS", "ERW RADIATORS",
  "CORE FRAMES", "45+ YEARS", "400 TONS/MONTH", "PANEL ENCLOSURES",
  "CUSTOM FABRICATION", "OEM CERTIFIED",
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 pt-20">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-orange glow-orange" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Est. 1978 · Jaipur, India · Custom Metal Fabrication
          </span>
        </motion.div>

        {/* Massive headline */}
        <div className="mb-8">
          {heroWords.map((word, i) => (
            <motion.div
              key={word.text}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ delay: 0.7 + i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1
                className={`font-display font-bold leading-[0.9] tracking-tight ${word.className}`}
                style={{ fontSize: "clamp(72px, 10vw, 140px)" }}
              >
                {word.text}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-muted-foreground text-lg max-w-lg mb-10"
        >
          Transformer tanks, panels & industrial components built to spec since 1978.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-orange text-primary-foreground font-display text-sm tracking-widest rounded-lg hover:bg-orange-glow transition-colors duration-300 glow-orange"
          >
            Request a Quote
          </a>
          <a
            href="#work"
            className="px-8 py-4 border border-foreground/20 text-foreground font-display text-sm tracking-widest rounded-lg hover:border-orange hover:text-orange transition-all duration-300"
          >
            See Our Work
          </a>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 border-t border-b py-4 overflow-hidden"
        style={{ borderColor: "hsl(0 0% 100% / 0.06)" }}
      >
        <div className="animate-marquee-left whitespace-nowrap flex">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center mx-6">
              <span className="font-display text-sm tracking-widest text-foreground/30">{item}</span>
              <span className="ml-6 text-orange/50">◆</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
