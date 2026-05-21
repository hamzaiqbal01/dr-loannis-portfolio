"use client";

import { useRef, useState, useCallback } from "react";

const expertiseItems = [
  "Complex Aortic Surgery & Aneurysm Repair",
  "Aortic Valve Repair & Replacement",
  "Coronary Artery Bypass & Multi-arterial Grafting",
  "Transcatheter Aortic Valve Replacement (TAVR)",
  "Minimally Invasive Cardiac Surgery",
  "Ross Procedure & Valve-Sparing Root Surgery",
  "Mitral Valve Repair & Replacement",
  "Cardiac Surgery Reoperations",
];

const DEFAULT_ROTATION = { x: 6, y: -14 };

export default function HeroRight3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(DEFAULT_ROTATION);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setRotation({ x: -ny * 18, y: nx * 24 });
    },
    []
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotation(DEFAULT_ROTATION);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-cream-deep flex flex-col justify-center items-center p-10 lg:p-16 relative overflow-hidden min-h-[520px] lg:min-h-0 cursor-none"
      style={{ perspective: "1100px" }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(184,150,90,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* Background anatomical SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[90%] h-[90%]">
          <circle cx="100" cy="100" r="90" stroke="#0B1F3A" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" stroke="#B8965A" strokeWidth="0.5" />
          <path d="M100 40 C80 55 70 75 80 100 C90 125 110 125 120 100 C130 75 120 55 100 40Z" stroke="#0B1F3A" strokeWidth="1.5" fill="none" />
          <path d="M100 40 C100 70 100 130 100 165" stroke="#B8965A" strokeWidth="0.8" />
          <path d="M80 100 C60 95 40 100 20 95" stroke="#0B1F3A" strokeWidth="0.8" />
          <path d="M120 100 C140 95 160 100 180 95" stroke="#0B1F3A" strokeWidth="0.8" />
        </svg>
      </div>

      {/* ── 3D Scene ── */}
      <div
        className="relative w-full max-w-[360px]"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovered
            ? "transform 0.07s ease-out"
            : "transform 0.65s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* ── Depth layer 3 – deep shadow ── */}
        <div
          className="absolute inset-0 rounded-[4px] bg-navy/20 blur-[2px]"
          style={{ transform: "translateZ(-50px) translate(18px, 18px)" }}
        />

        {/* ── Depth layer 2 – gold accent ── */}
        <div
          className="absolute inset-0 rounded-[4px] border border-gold/30 bg-gold/8"
          style={{ transform: "translateZ(-25px) translate(9px, 9px)" }}
        />

        {/* ── Main card ── */}
        <div
          className="relative bg-white border border-navy/10 rounded-[4px] p-8 shadow-[0_24px_64px_rgba(11,31,58,0.14)]"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="text-[10px] tracking-[0.15em] uppercase text-gold font-medium mb-4">
            Surgical Expertise
          </div>
          <div className="font-serif text-[21px] font-semibold text-navy mb-5 leading-snug">
            Full-Spectrum Adult Cardiac &amp; Aortic Care
          </div>
          <ul className="flex flex-col gap-[7px]">
            {expertiseItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13px] text-muted">
                <span className="text-gold shrink-0 leading-[1.7]">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Floating badge – top right – Board Certified ── */}
        <div
          className="badge-float-up absolute -top-5 -right-6 bg-navy text-white rounded-[3px] px-3.5 py-2.5 flex items-center gap-2.5 shadow-[0_8px_24px_rgba(11,31,58,0.35)]"
        >
          <span className="font-serif text-[20px] text-gold-light font-medium leading-none">2×</span>
          <div className="leading-none">
            <div className="text-[8px] tracking-[0.14em] uppercase text-white/50 mb-0.5">Board</div>
            <div className="text-[11px] font-medium text-white">Certified</div>
          </div>
        </div>

        {/* ── Floating badge – bottom left – fellowship ── */}
        <div
          className="badge-float-down absolute -bottom-5 -left-6 bg-gold text-white rounded-[3px] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(184,150,90,0.45)] max-w-[200px]"
        >
          <p className="text-[11px] font-medium text-white leading-snug">
            Advanced Aortic Surgery Fellowship Trained
          </p>
        </div>

        {/* ── Floating icon – mid right – specialty marker ── */}
        <div
          className="badge-float-side absolute top-1/2 -right-7 w-11 h-11 bg-cream border border-gold/30 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(11,31,58,0.12)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#B8965A" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.403 4.068 2 6.281 2c1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447C20.266 2.01 23 3.631 23 7.191c0 4.069-5.136 8.625-11 14.402z" />
          </svg>
        </div>

        {/* ── Subtle top shine on main card ── */}
        <div
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent rounded-t-[4px] pointer-events-none"
          style={{ transform: "translateZ(1px)" }}
        />
      </div>

      {/* Mouse-follow hint */}
      <p className="absolute bottom-5 left-0 right-0 text-center text-[10px] tracking-[0.12em] uppercase text-navy/25 select-none pointer-events-none">
        Move cursor to explore
      </p>
    </div>
  );
}
