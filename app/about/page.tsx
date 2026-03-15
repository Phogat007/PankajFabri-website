"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Award, Users, Factory, TrendingUp, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

const timeline = [
  { year: "1978", title: "Founded", desc: "Pankaj Fabricators established in Jaipur, Rajasthan, starting with manual sheet metal work for local industries." },
  { year: "1990", title: "CNC Integration", desc: "Adopted first CNC plasma cutting machines, doubling precision and production capacity across our facility." },
  { year: "2001", title: "OEM Certification", desc: "Achieved OEM certification for transformer tank manufacturing, partnering with major power sector companies." },
  { year: "2010", title: "Laser Technology", desc: "Installed high-precision fiber laser cutting systems enabling ±0.1mm tolerances on all metal components." },
  { year: "2018", title: "HDFC Partnership", desc: "Secured strategic financial backing from HDFC, enabling major infrastructure upgrades and capacity expansion." },
  { year: "2024", title: "₹40 Cr Milestone", desc: "Achieved ₹40 Crore annual turnover with 100+ skilled employees and 400+ tons monthly output." },
];

const team = [
  { name: "Pankaj Sharma", role: "Founder & Managing Director", exp: "45+ years" },
  { name: "Rohit Sharma", role: "Head of Operations", exp: "20+ years" },
  { name: "Anita Verma", role: "Quality Assurance Lead", exp: "15+ years" },
  { name: "Deepak Meena", role: "Chief Engineer", exp: "18+ years" },
];

const strengths = [
  { icon: Factory, label: "50,000 sq ft facility" },
  { icon: Zap, label: "Fiber laser ±0.1mm tolerance" },
  { icon: Users, label: "25 certified engineers" },
  { icon: Award, label: "ISO & OEM certified" },
  { icon: TrendingUp, label: "400+ tons/month capacity" },
  { icon: CheckCircle, label: "98% on-time delivery" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="relative bg-background min-h-screen">

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-end overflow-hidden pb-20">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange/5 via-transparent to-background" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orange/5 blur-[120px]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-display font-bold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(56px, 9vw, 120px)" }}
          >
            <span className="text-foreground">FORGED BY</span>
            <br />
            <span className="text-gradient-orange">EXPERIENCE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-muted-foreground text-lg max-w-xl mt-6"
          >
            Four decades of metal fabrication excellence — from a small workshop in Jaipur to one of Rajasthan&apos;s most trusted industrial manufacturers.
          </motion.p>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="py-20 bg-bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {strengths.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card glass-card-hover rounded-2xl p-6 flex items-center gap-4"
              >
                <s.icon className="text-orange shrink-0" size={24} />
                <span className="font-display text-sm font-semibold text-foreground">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block">Journey</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              45 YEARS OF <span className="text-gradient-orange">MILESTONES</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange/50 via-orange/20 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange glow-orange mt-1.5" />

                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass-card glass-card-hover rounded-2xl p-6">
                      <span className="font-display text-3xl font-bold text-gradient-orange">{item.year}</span>
                      <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block">Leadership</span>
            <h2 className="font-display text-5xl font-bold">
              THE <span className="text-gradient-orange">TEAM</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card glass-card-hover rounded-2xl p-8 group"
              >
                <div className="w-14 h-14 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                  <span className="font-display text-xl font-bold text-orange">{member.name[0]}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-orange text-xs tracking-wider uppercase mb-3">{member.role}</p>
                <p className="text-muted-foreground text-xs">{member.exp} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Ready to work <span className="text-gradient-orange">together?</span>
            </h2>
            <p className="text-muted-foreground">Tell us about your project requirements.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-primary-foreground font-display text-sm tracking-widest rounded-lg hover:bg-orange-glow transition-colors duration-300 glow-orange shrink-0"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
