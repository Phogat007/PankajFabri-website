"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl"
    >
      <div
        className="glass-card rounded-full px-6 py-3 flex items-center justify-between"
        style={{ borderColor: "hsl(38 86% 53% / 0.15)" }}
      >
        <Link href="/" className="flex items-center gap-2">
          <Settings className="text-orange" size={20} />
          <span className="font-display text-sm font-bold tracking-wider text-foreground">
            PANKAJ FABRICATORS
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                  pathname === l.href
                    ? "text-orange"
                    : "text-muted-foreground hover:text-orange"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-orange transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-xs font-display tracking-wider border border-orange text-orange px-4 py-1.5 rounded-full hover:bg-orange hover:text-primary-foreground transition-all duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-orange transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-card rounded-2xl mt-2 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-3 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm transition-colors ${
                      pathname === l.href
                        ? "text-orange"
                        : "text-muted-foreground hover:text-orange"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-orange border border-orange px-4 py-1.5 rounded-full"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
