"use client";

import { Settings } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

const products = ["Transformer Tanks", "Metal Sheet Boxes", "Panel Enclosures", "Racking Systems"];

const SiteFooter = () => (
  <footer className="border-t border-orange/20 bg-bg-surface py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Settings className="text-orange" size={20} />
            <span className="font-display text-sm font-bold text-foreground">PANKAJ FABRICATORS</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Precision metal fabrication since 1978. Jaipur, India.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-orange transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground text-sm mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {products.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-foreground text-sm mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+91 141 XXX XXXX</li>
            <li>info@pankajfabricators.com</li>
            <li>Jaipur, Rajasthan</li>
          </ul>
          <div className="flex gap-2 mt-4">
            {["LinkedIn", "Twitter", "Facebook"].map((s) => (
              <span
                key={s}
                className="glass-card px-3 py-1.5 rounded-full text-xs text-muted-foreground hover:text-orange transition-colors cursor-pointer"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-foreground/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-muted-foreground/50 text-xs">
        <span>© 2026 Pankaj Fabricators. All rights reserved. Jaipur, India.</span>
        <span>
          Website crafted with ❤️ by{" "}
          <a
            href="https://flux8labs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange transition-colors"
          >
            Flux8labs
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
