"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Ruler, Flame, Layers, Cog, Cpu, Package } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Package,
    num: "01",
    name: "Transformer Tank Manufacturing",
    short: "OEM-grade tanks for every transformer class",
    desc: "From 25kVA distribution units to 100MVA power transformers — we manufacture oil-filled and dry-type tanks to exact OEM drawings. Our welding team holds BS & IS certifications, and every tank undergoes leak and pressure testing before dispatch.",
    capabilities: [
      "25kVA to 100MVA range",
      "MIG / TIG / SAW welding",
      "Radiator fin attachment",
      "Pressure & leak testing",
      "Epoxy & powder coating",
      "Flanged and bolted variants",
    ],
  },
  {
    icon: Ruler,
    num: "02",
    name: "Precision Laser Cutting",
    short: "±0.1mm tolerance on every cut",
    desc: "Our fiber laser systems deliver clean, burr-free cuts on mild steel, stainless steel, and aluminium up to 25mm thick. Nesting software minimises material waste while maintaining dimensional accuracy across high-volume runs.",
    capabilities: [
      "Up to 25mm mild steel",
      "Stainless & aluminium",
      "±0.1mm tolerance",
      "Nesting optimisation",
      "DXF / DWG file support",
      "Same-day prototyping",
    ],
  },
  {
    icon: Cog,
    num: "03",
    name: "CNC Bending & Forming",
    short: "Complex profiles, consistent results",
    desc: "Multi-axis CNC press brakes handle sheet forming up to 6m length with repeatable accuracy. We produce channels, brackets, enclosure frames and custom profiles to your exact bend radius and angle specifications.",
    capabilities: [
      "Up to 6m bending length",
      "Multi-radius profiles",
      "Repeatable ±0.5° accuracy",
      "MS / SS / aluminium",
      "Tooling library of 200+",
      "Small & large runs",
    ],
  },
  {
    icon: Flame,
    num: "04",
    name: "Welding & Assembly",
    short: "Certified welders, structural integrity",
    desc: "MIG, TIG and submerged arc welding for structural and precision joins. All welders hold IS/AWS certification. We handle sub-assembly to fully finished product assembly with in-house hardware sourcing.",
    capabilities: [
      "MIG / TIG / SAW",
      "IS & AWS certified",
      "Structural & precision",
      "Leak-proof weld testing",
      "Sub & full assembly",
      "Hardware sourcing",
    ],
  },
  {
    icon: Layers,
    num: "05",
    name: "Surface Treatment & Finishing",
    short: "Corrosion protection that lasts",
    desc: "Shot blasting, epoxy primer, powder coating and zinc phosphate treatment available in-house. Our finishing lines handle components up to 4m × 2m. Custom RAL colours and textures on request.",
    capabilities: [
      "Shot blasting (Sa 2.5)",
      "Epoxy primer coating",
      "Powder coat (any RAL)",
      "Zinc phosphate treatment",
      "4m × 2m capacity",
      "UV & weatherproof finish",
    ],
  },
  {
    icon: Cpu,
    num: "06",
    name: "Product Development & R&D",
    short: "From concept to production-ready",
    desc: "Our engineering team offers DFM analysis, prototyping, and small-batch trial runs. We work from customer drawings or from scratch — supporting CAD design, material selection and cost optimisation throughout.",
    capabilities: [
      "DFM analysis",
      "CAD design support",
      "Prototype fabrication",
      "Material selection",
      "Cost optimisation",
      "Trial production runs",
    ],
  },
];

const process = [
  { step: "01", title: "RFQ & Drawing Review", desc: "Submit your requirements or drawings. Our team reviews specs within 24 hours." },
  { step: "02", title: "Quote & Timeline", desc: "Detailed quote with material breakdown, timeline and quality plan sent to you." },
  { step: "03", title: "Production", desc: "Your order enters our production line — laser, forming, welding, finishing." },
  { step: "04", title: "QC Inspection", desc: "Dimensional checks, weld inspection, surface quality — documented and signed off." },
  { step: "05", title: "Delivery", desc: "Packed and dispatched with full documentation. 98% on-time delivery rate." },
];

export default function ServicesPage() {
  return (
    <div className="relative bg-background min-h-screen">

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block"
          >
            What We Do
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
            <span className="text-gradient-orange">SERVICES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg max-w-xl"
          >
            End-to-end metal fabrication capabilities — from laser cutting and forming to finishing and delivery.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6 space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden group"
              >
                <div className="p-8 lg:p-12 grid lg:grid-cols-[1fr_auto] gap-10 items-start">
                  <div>
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0 group-hover:bg-orange/20 transition-colors">
                        <Icon className="text-orange" size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="font-mono text-orange text-xs">{service.num}</span>
                        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mt-1">{service.name}</h2>
                        <p className="text-orange/70 text-sm mt-1 font-medium">{service.short}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">{service.desc}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-sm text-foreground/70">
                          <CheckCircle className="text-orange shrink-0" size={14} />
                          {cap}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-orange/30 text-orange text-xs font-display tracking-wider rounded-lg hover:bg-orange hover:text-primary-foreground transition-all duration-300 whitespace-nowrap"
                  >
                    Get Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-bg-surface">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block">How It Works</span>
            <h2 className="font-display text-5xl font-bold">
              OUR <span className="text-gradient-orange">PROCESS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-orange/30 to-transparent z-10" />
                )}
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center mb-4">
                    <span className="font-display font-bold text-orange text-sm">{step.step}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2 text-sm">{step.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Start your <span className="text-gradient-orange">project today</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Get a detailed quote within 24 hours of sending your requirements.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange text-primary-foreground font-display text-sm tracking-widest rounded-lg hover:bg-orange-glow transition-colors glow-orange"
            >
              Contact Our Team <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
