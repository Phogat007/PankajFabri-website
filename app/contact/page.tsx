"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    lines: ["Plot No. 42, RIICO Industrial Area", "Sitapura, Jaipur — 302 022", "Rajasthan, India"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 98290 XXXXX", "+91 141-XXX XXXX"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@pankajfabricators.com", "sales@pankajfabricators.com"],
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sun: Closed"],
  },
];

const services = [
  "Transformer Tanks",
  "Laser Cutting",
  "CNC Bending",
  "ERW Radiators",
  "Electric Panels",
  "Product Development",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative bg-background min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-display font-bold leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: "clamp(48px, 8vw, 100px)" }}
          >
            <span className="text-foreground">LET&apos;S</span>
            <br />
            <span className="text-gradient-orange">BUILD TOGETHER</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg max-w-lg mx-auto"
          >
            Tell us about your project. We respond to all enquiries within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">

            {/* Left — contact info */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card glass-card-hover rounded-2xl p-6 flex gap-5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0 group-hover:bg-orange/20 transition-colors">
                      <Icon className="text-orange" size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{info.label}</div>
                      {info.lines.map((line, j) => (
                        <div key={j} className="text-foreground text-sm font-medium">{line}</div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}

              {/* Quick actions */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="font-display font-bold text-foreground mb-4 text-sm">Quick Connect</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919829000000"
                    className="flex items-center justify-between p-3 rounded-xl bg-orange/5 hover:bg-orange/10 transition-colors group"
                  >
                    <span className="text-foreground text-sm font-medium">Call Us Now</span>
                    <ArrowRight className="text-orange group-hover:translate-x-1 transition-transform" size={16} />
                  </a>
                  <a
                    href="https://wa.me/919829000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-green-500/5 hover:bg-green-500/10 transition-colors group"
                  >
                    <span className="text-foreground text-sm font-medium">WhatsApp Enquiry</span>
                    <ArrowRight className="text-green-400 group-hover:translate-x-1 transition-transform" size={16} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange/5 rounded-full blur-[60px] pointer-events-none" />

              {!submitted ? (
                <>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">Request a Quote</h2>
                  <p className="text-muted-foreground text-sm mb-8">Fill in your details and we&apos;ll get back to you within 24 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Your Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Rajesh Kumar"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-orange/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Company</label>
                        <input
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Company Ltd."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-orange/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-orange/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Phone *</label>
                        <input
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98XXX XXXXX"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-orange/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Service Required</label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setForm({ ...form, service: s })}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                              form.service === s
                                ? "bg-orange text-primary-foreground"
                                : "bg-white/5 border border-white/10 text-muted-foreground hover:border-orange/30 hover:text-orange"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Message / Requirements *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your requirements, quantities, material specs, deadlines..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-orange/50 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 py-4 bg-orange text-primary-foreground font-display text-sm tracking-widest rounded-xl hover:bg-orange-glow transition-colors glow-orange"
                    >
                      <Send size={16} />
                      Send Enquiry
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center mb-6">
                    <CheckCircle className="text-orange" size={36} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">Enquiry Received!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Thank you {form.name}. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" }); }}
                    className="mt-8 text-orange text-sm font-medium hover:underline"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
