"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Building2, Zap, Factory, Shield } from "lucide-react";
import Link from "next/link";

const clients = [
  "HDFC Bank", "BHEL", "Schneider Electric", "ABB India", "Siemens India",
  "NTPC Limited", "Power Grid Corp", "L&T Electrical", "Havells India", "Crompton Greaves",
  "Voltamp Transformers", "Indo Tech Transformers", "Kirloskar Electric", "GE T&D India", "Tata Power",
  "Adani Power", "Rajasthan DISCOMS", "JVVNL", "AVVNL", "JdVVNL",
];

const sectors = [
  { icon: Zap, name: "Power Generation", clients: 38, desc: "State electricity boards, IPPs and central generating stations trust us for transformer components." },
  { icon: Building2, name: "Industrial OEMs", clients: 52, desc: "Leading transformer manufacturers rely on our precision tanks and parts for their production lines." },
  { icon: Factory, name: "Infrastructure", clients: 24, desc: "Railway electrification, metro projects and urban infrastructure across Rajasthan." },
  { icon: Shield, name: "Defence & PSU", clients: 11, desc: "Government and public sector undertakings requiring stringent quality standards." },
];

const testimonials = [
  {
    quote: "Pankaj Fabricators has been our primary tank supplier for over a decade. Their precision and on-time delivery record is unmatched in the region.",
    name: "Rajiv Mehta",
    role: "Procurement Head",
    company: "Voltamp Transformers",
    rating: 5,
  },
  {
    quote: "The laser cutting quality and weld finish on their enclosures significantly reduced our in-house rework. Highly recommended for volume OEM supply.",
    name: "Suresh Patel",
    role: "Operations Director",
    company: "Kirloskar Electric",
    rating: 5,
  },
  {
    quote: "We shifted our entire radiator supply to Pankaj Fabricators in 2019. Cost savings of 15% with zero quality compromise — exceptional value.",
    name: "Anjali Singh",
    role: "Supply Chain Manager",
    company: "Indo Tech Transformers",
    rating: 5,
  },
  {
    quote: "Our most demanding jobs — custom HT cable boxes with complex geometry — were handled flawlessly with full documentation and traceability.",
    name: "Deepak Sharma",
    role: "Technical Director",
    company: "ABB India (Vendor Partner)",
    rating: 5,
  },
];

const stats = [
  { value: "125+", label: "Active Clients" },
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "45+", label: "Years Serving Industry" },
];

const marqueeClients = [...clients, ...clients];

export default function ClientsPage() {
  return (
    <div className="relative bg-background min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block"
          >
            Trusted Partners
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
            <span className="text-gradient-orange">CLIENTS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg max-w-xl"
          >
            125+ companies across the power sector and heavy industry have trusted Pankaj Fabricators since 1978.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-gradient-orange mb-2">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Marquee */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-6 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground/40"
          >
            COMPANIES THAT TRUST US
          </motion.h2>
        </div>

        {/* Row 1 — left */}
        <div className="relative mb-4">
          <div className="flex">
            <div className="animate-marquee-left whitespace-nowrap flex">
              {marqueeClients.map((client, i) => (
                <span key={i} className="inline-flex items-center mx-6 gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange/40" />
                  <span className="font-display text-sm tracking-widest text-foreground/50 hover:text-orange transition-colors">{client}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="relative">
          <div className="flex">
            <div className="animate-marquee-right whitespace-nowrap flex">
              {[...marqueeClients].reverse().map((client, i) => (
                <span key={i} className="inline-flex items-center mx-6 gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange/30" />
                  <span className="font-display text-sm tracking-widest text-foreground/40 hover:text-orange transition-colors">{client}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block">Industries</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              SECTORS WE <span className="text-gradient-orange">SERVE</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-8 group"
                >
                  <Icon className="text-orange mb-6 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{sector.name}</h3>
                  <div className="text-gradient-orange font-display text-2xl font-bold mb-3">{sector.clients}+</div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{sector.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block">What They Say</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              CLIENT <span className="text-gradient-orange">TESTIMONIALS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass-card glass-card-hover rounded-2xl p-8 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-orange fill-orange" />
                  ))}
                </div>

                <span className="text-5xl text-orange/20 font-display absolute top-6 right-8 select-none">"</span>

                <p className="text-foreground/80 leading-relaxed mb-8 relative z-10">{t.quote}</p>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-orange text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-surface">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Join our <span className="text-gradient-orange">client family</span>
            </h2>
            <p className="text-muted-foreground">125+ companies already trust us. Let us serve you.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-primary-foreground font-display text-sm tracking-widest rounded-lg hover:bg-orange-glow transition-colors glow-orange shrink-0"
          >
            Start a Partnership <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
