"use client";

const row1 = ["45+ YEARS", "400+ TONS/MONTH", "100 EMPLOYEES", "25 ENGINEERS"];
const row2 = ["₹40 CR TURNOVER", "500+ PROJECTS", "OEM CERTIFIED", "HDFC BACKED"];

const MarqueeRow = ({ items, reverse }: { items: string[]; reverse?: boolean }) => (
  <div className="overflow-hidden py-4">
    <div className={`whitespace-nowrap flex ${reverse ? "animate-marquee-right" : "animate-marquee-left"}`}>
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="inline-flex items-center mx-8">
          <span className="font-display text-2xl md:text-4xl font-bold text-foreground/80 tracking-wider">{item}</span>
          <span className="ml-8 text-orange text-lg">◆</span>
        </span>
      ))}
    </div>
  </div>
);

const StatsBar = () => (
  <section className="py-12 bg-navy overflow-hidden">
    <MarqueeRow items={row1} />
    <div className="h-px bg-foreground/10" />
    <MarqueeRow items={row2} reverse />
  </section>
);

export default StatsBar;
