"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const startTime = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const facts = [
  { label: "Established", value: "1978" },
  { label: "Employees", value: "100+" },
  { label: "Monthly Output", value: "400+ Tons" },
  { label: "Turnover", value: "₹40 Cr" },
];

const AboutSection = () => (
  <section id="about" className="py-32 relative">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left - sticky */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-32"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block">About Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            45 years of{" "}
            <span className="text-gradient-orange">metal mastery</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Since 1978, Pankaj Fabricators has been at the forefront of precision metal fabrication in Jaipur, India.
            Our state-of-the-art facility combines traditional craftsmanship with modern CNC technology to deliver
            components that meet the most demanding industrial standards.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-orange font-medium hover:gap-3 transition-all duration-300">
            Start a project <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Right - scrolling panels */}
        <div className="space-y-8">
          {/* Facts card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-card-hover rounded-2xl p-8"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-6">Company at a Glance</h3>
            <div className="grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="p-4 rounded-xl bg-muted/50">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{f.label}</div>
                  <div className="text-foreground font-display font-bold text-lg">{f.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Counters */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-8"
          >
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-display text-5xl font-bold text-gradient-orange">
                  <CountUp target={45} suffix="+" />
                </div>
                <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Years Active</div>
              </div>
              <div>
                <div className="font-display text-5xl font-bold text-gradient-orange">
                  <CountUp target={400} suffix="+" />
                </div>
                <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Tons / Month</div>
              </div>
              <div>
                <div className="font-display text-5xl font-bold text-gradient-orange">
                  <CountUp target={98} suffix="%" />
                </div>
                <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card glass-card-hover rounded-2xl p-8 relative"
          >
            <span className="text-6xl text-orange/30 font-display absolute top-4 left-6">"</span>
            <p className="text-foreground text-xl font-display leading-relaxed pt-8">
              Each product is meticulously manufactured with precision and high-quality materials, ensuring durability and performance.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
