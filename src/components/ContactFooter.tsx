"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactFooter = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-orange mb-4 block">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Contact Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {(["name", "email", "phone", "message"] as const).map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {field === "message" ? (
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground placeholder:text-muted-foreground focus:border-orange focus:outline-none transition-colors resize-none"
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      placeholder={field === "name" ? "Your Name" : field === "email" ? "Email Address" : "Phone Number"}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground placeholder:text-muted-foreground focus:border-orange focus:outline-none transition-colors"
                    />
                  )}
                </motion.div>
              ))}
              <button className="px-8 py-3 bg-navy text-foreground font-display text-sm tracking-widest rounded-lg hover:bg-orange hover:text-primary-foreground transition-colors duration-300">
                SEND MESSAGE
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {[
                { icon: MapPin, label: "Address", value: "Jaipur, Rajasthan, India" },
                { icon: Phone, label: "Phone", value: "+91 141 XXX XXXX" },
                { icon: Mail, label: "Email", value: "info@pankajfabricators.com" },
                { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center shrink-0">
                    <item.icon className="text-orange" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{item.label}</div>
                    <div className="text-muted-foreground text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default ContactFooter;
