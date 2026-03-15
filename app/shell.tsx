"use client";

import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import AmbientOrbs from "@/components/AmbientOrbs";
import ScrollProgress from "@/components/ScrollProgress";
import SiteFooter from "@/components/SiteFooter";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <AmbientOrbs />
      <ScrollProgress />
      <Navbar />
      {children}
      <SiteFooter />
    </>
  );
}
