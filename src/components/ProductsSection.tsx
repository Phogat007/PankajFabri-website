"use client";

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Box, Zap, Shield, Wrench, Settings, Cpu, CircleDot, Layers, Bolt } from 'lucide-react';

interface Product {
  name: string;
  desc: string;
  icon: React.ElementType;
  span: string;
}

const products: Product[] = [
  { name: 'Transformer Tanks', desc: 'Heavy-duty oil-filled & dry-type tanks engineered for power distribution', icon: Box, span: 'col-span-2 row-span-2' },
  { name: 'Metal Sheet Boxes', desc: 'Precision-formed enclosures for industrial applications', icon: Layers, span: 'col-span-2 row-span-2' },
  { name: 'Electric Panel Boxes', desc: 'LT/HT panel enclosures with IP-rated protection', icon: Zap, span: 'col-span-1 row-span-1' },
  { name: 'Racking System', desc: 'Modular industrial storage solutions', icon: Shield, span: 'col-span-1 row-span-1' },
  { name: 'HT/LT Cable Boxes', desc: 'High-tension cable termination enclosures', icon: Wrench, span: 'col-span-1 row-span-1' },
  { name: 'LT Cable Meter Box', desc: 'Metering enclosures for distribution networks', icon: Settings, span: 'col-span-1 row-span-1' },
  { name: 'ERW Tube Radiators', desc: 'Efficient heat dissipation units', icon: Cpu, span: 'col-span-1 row-span-1' },
  { name: 'Core Frame', desc: 'Precision transformer core assemblies', icon: CircleDot, span: 'col-span-1 row-span-1' },
  { name: 'Tie Rod & Core Bolt', desc: 'High-strength fastening components', icon: Bolt, span: 'col-span-2 row-span-1' },
];

function TiltCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [12, -12]), { stiffness: 400, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-12, 12]), { stiffness: 400, damping: 25 });

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
    spotlightX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotlightY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isLarge = product.span.includes('row-span-2');
  const Icon = product.icon;

  return (
    <motion.div
      ref={cardRef}
      className={`${product.span} relative overflow-hidden cursor-pointer`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="glass-card h-full p-6 lg:p-8 relative overflow-hidden group border border-orange/15 w-full">
        {/* Crosshatch for large tiles */}
        {isLarge && (
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`ch-${index}`} width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M0 0L8 8M8 0L0 8" stroke="hsl(var(--orange))" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#ch-${index})`}/>
          </svg>
        )}

        {/* Spotlight effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(240,160,32,0.15) 0%, transparent 60%)`,
          }}
        />

        <Icon className="w-8 h-8 text-orange mb-4" strokeWidth={1.5} />
        <h3 className={`font-display font-bold text-foreground tracking-tight ${isLarge ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>
          {product.name}
        </h3>
        <p className={`text-muted-foreground font-body mt-2 ${isLarge ? 'text-sm' : 'text-xs'} leading-relaxed`}>
          {product.desc}
        </p>
      </div>
    </motion.div>
  );
}

const ProductsSection = () => {
  return (
    <section id="products" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <span className="font-mono text-[11px] tracking-[0.25em] text-orange block mb-4">OUR PRODUCTS</span>
          <h2 style={{ fontSize: 'clamp(48px, 7vw, 80px)' }} className="font-display font-bold tracking-tighter leading-none">
            <span className="text-foreground">WHAT WE </span>
            <span className="text-orange">MAKE</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] lg:auto-rows-[200px]">
          {products.map((product, i) => (
            <TiltCard key={i} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
