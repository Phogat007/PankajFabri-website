"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    name: 'Transformer Tanks',
    desc: 'Oil-filled and dry-type transformer tanks engineered to exact OEM specifications. From 25kVA distribution units to 100MVA power transformers.',
  },
  {
    num: '02',
    name: 'Parts & Accessories',
    desc: 'Precision-manufactured conservators, radiators, marshalling boxes, and ancillary components for complete transformer assemblies.',
  },
  {
    num: '03',
    name: 'Product Development',
    desc: 'End-to-end R&D and prototyping services. We transform concepts into production-ready metal components with full DFM analysis.',
  },
  {
    num: '04',
    name: 'Laser Cutting',
    desc: 'High-precision CNC laser cutting with ±0.1mm tolerance. Fiber laser technology for clean edges on mild steel, stainless, and aluminum.',
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;
      const panels = gsap.utils.toArray<HTMLElement>('.service-panel');
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1.2,
          end: () => `+=${containerRef.current!.scrollWidth - window.innerWidth}`,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden bg-background">
      {/* Heading */}
      <div className="pt-24 pb-12 px-[clamp(24px,5vw,80px)]">
        <span className="font-mono text-[11px] tracking-[0.25em] text-orange block mb-4">WHAT WE DO</span>
        <h2 style={{ fontSize: 'clamp(40px, 6vw, 64px)' }} className="font-display font-bold tracking-tighter">
          <span className="text-foreground">OUR </span>
          <span className="text-orange">SERVICES</span>
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div ref={containerRef} className="flex h-[60vh]">
        {services.map((service, i) => (
          <div key={i} className="service-panel flex-shrink-0 w-[80vw] px-4 lg:px-8">
            <div className="glass-card h-full p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden group">
              {/* Faint bg number */}
              <span className="absolute top-4 right-8 font-display text-[120px] font-bold text-foreground/[0.03] leading-none select-none">
                {service.num}
              </span>

              <div>
                <span className="font-mono text-orange text-sm">{service.num}</span>
                <h3 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight">
                  {service.name}
                </h3>
                <p className="font-body text-muted-foreground mt-4 max-w-md leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-orange font-mono text-sm tracking-wide cursor-pointer">
                <span>LEARN MORE</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-3 py-8">
        {services.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-orange/30" />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
