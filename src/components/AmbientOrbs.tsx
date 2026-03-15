"use client";

import { useEffect, useRef } from "react";

const AmbientOrbs = () => {
  const orangeRef = useRef<HTMLDivElement>(null);
  const navyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = ((e.clientX - cx) / cx) * 30;
      const dy = ((e.clientY - cy) / cy) * 30;
      if (orangeRef.current) {
        orangeRef.current.style.transform = `translate(${-dx}px, ${-dy}px)`;
      }
      if (navyRef.current) {
        navyRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      <div ref={orangeRef} className="ambient-orb ambient-orb-orange" style={{ transition: "transform 0.5s ease-out" }} />
      <div ref={navyRef} className="ambient-orb ambient-orb-navy" style={{ transition: "transform 0.5s ease-out" }} />
    </>
  );
};

export default AmbientOrbs;
