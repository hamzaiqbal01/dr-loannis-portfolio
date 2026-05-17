"use client";

import { useState, useRef } from "react";
import Link from "next/link";

/* All individual procedures shown in the dropdown */
const procedureLinks = [
  { label: "Adult Cardiac Surgery",                   href: "/procedures/adult-cardiac-surgery" },
  { label: "Complex Aortic Surgery",                  href: "/procedures/complex-aortic-surgery" },
  { label: "Aortic Valve Repair & Replacement",       href: "/procedures/complex-aortic-surgery" },
  { label: "Minimally Invasive Cardiac Surgery",      href: "/procedures/minimally-invasive-cardiac-surgery" },
  { label: "Transcatheter Aortic Valve Replacement",  href: "/procedures/tavr" },
  { label: "The Ross Procedure",                      href: "/procedures/complex-aortic-surgery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [procOpen, setProcOpen]         = useState(false);
  const [mobileProcOpen, setMobileProcOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openProc  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setProcOpen(true); };
  const closeProc = () => { closeTimer.current = setTimeout(() => setProcOpen(false), 130); };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-8 md:px-12 bg-cream/96 backdrop-blur-sm border-b border-navy/12">

      {/* ── Logo ── */}
      <Link href="/" className="font-serif text-[20px] font-semibold text-navy tracking-[0.02em] leading-[1.2] no-underline">
        Dr. Ioannis Loumiotis
        <span className="block text-[11px] font-sans font-light text-gold tracking-[0.15em] uppercase">
          MD · Aortic &amp; Cardiac Surgeon
        </span>
      </Link>

      {/* ── Desktop links ── */}
      <ul className="hidden md:flex gap-8 list-none items-center">
        <li>
          <Link href="/" className="text-muted text-[13px] tracking-[0.06em] uppercase font-medium no-underline hover:text-navy transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-muted text-[13px] tracking-[0.06em] uppercase font-medium no-underline hover:text-navy transition-colors duration-200">
            About
          </Link>
        </li>

        {/* Procedures – click navigates, hover opens dropdown */}
        <li className="relative" onMouseEnter={openProc} onMouseLeave={closeProc}>
          <Link
            href="/procedures"
            onClick={() => setProcOpen(false)}
            className="flex items-center gap-1.5 text-muted text-[13px] tracking-[0.06em] uppercase font-medium no-underline hover:text-navy transition-colors duration-200"
          >
            Procedures
            <svg
              viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"
              className={`w-3.5 h-3.5 transition-transform duration-200 ${procOpen ? "rotate-180" : ""}`}
            >
              <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Dropdown */}
          <div
            onMouseEnter={openProc}
            onMouseLeave={closeProc}
            className={`absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[290px] bg-white border border-navy/10 rounded-[4px] shadow-[0_8px_32px_rgba(11,31,58,0.12)] overflow-hidden transition-all duration-200 origin-top ${
              procOpen ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
            }`}
          >
            {/* Header */}
            <div className="px-5 py-3 border-b border-navy/8 bg-cream-deep flex items-center gap-2">
              <span className="block w-4 h-px bg-gold shrink-0" />
              <span className="text-[10px] tracking-[0.18em] uppercase text-gold font-medium">
                Surgical Specializations
              </span>
            </div>

            {/* All procedure links */}
            <ul className="py-1.5 list-none">
              {procedureLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setProcOpen(false)}
                    className="flex items-center gap-3 px-5 py-2.5 text-[13px] text-muted no-underline hover:text-navy hover:bg-cream transition-colors duration-150 group"
                  >
                    <span className="block w-3 h-px bg-gold shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Footer – view all */}
            <div className="border-t border-navy/8 px-5 py-3">
              <Link
                href="/procedures"
                onClick={() => setProcOpen(false)}
                className="flex items-center justify-between text-[11px] tracking-widest uppercase font-medium text-gold hover:text-navy transition-colors duration-150 no-underline group"
              >
                View All Procedures
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </li>

        {/* Patient Testimonials & Patient Stories — same style as other nav links */}
        <li>
          <Link
            href="/patient-testimonials"
            className="text-muted text-[13px] tracking-[0.06em] uppercase font-medium no-underline hover:text-navy transition-colors duration-200"
          >
            Patient Testimonials
          </Link>
        </li>
        <li>
          <Link
            href="/patient-stories"
            className="text-muted text-[13px] tracking-[0.06em] uppercase font-medium no-underline hover:text-navy transition-colors duration-200"
          >
            Patient Stories
          </Link>
        </li>
      </ul>

      {/* ── Desktop CTA ── */}
      <Link
        href="/contact"
        className="hidden md:inline-flex items-center justify-center bg-navy text-white px-[22px] py-[9px] rounded-[2px] text-[12px] tracking-widest uppercase font-medium no-underline hover:bg-navy-mid transition-colors duration-200"
      >
        Contact Us
      </Link>

      {/* ── Mobile hamburger ── */}
      <button
        className="md:hidden flex flex-col justify-center gap-[5px] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`block w-6 h-[1.5px] bg-navy transition-transform duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
        <span className={`block w-6 h-[1.5px] bg-navy transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[1.5px] bg-navy transition-transform duration-200 origin-center ${menuOpen ? "-rotate-45 translate-y-[-6.5px]" : ""}`} />
      </button>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-cream border-b border-navy/12 flex flex-col md:hidden shadow-sm">
          <div className="flex flex-col gap-1 p-6">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-muted text-[13px] tracking-[0.06em] uppercase font-medium hover:text-navy transition-colors duration-200 py-1 no-underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-muted text-[13px] tracking-[0.06em] uppercase font-medium hover:text-navy transition-colors duration-200 py-1 no-underline"
            >
              About
            </Link>

            {/* Mobile procedures accordion */}
            <div>
              <div className="flex items-center justify-between py-1">
                <Link
                  href="/procedures"
                  onClick={() => setMenuOpen(false)}
                  className="text-muted text-[13px] tracking-[0.06em] uppercase font-medium hover:text-navy transition-colors duration-200 no-underline"
                >
                  Procedures
                </Link>
                <button
                  onClick={() => setMobileProcOpen((v) => !v)}
                  className="p-1 text-muted hover:text-navy transition-colors duration-200 bg-transparent border-none cursor-pointer"
                  aria-label="Toggle procedures list"
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileProcOpen ? "rotate-180" : ""}`}>
                    <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {mobileProcOpen && (
                <div className="flex flex-col gap-0.5 pl-4 border-l border-gold/40 ml-1 mt-1 mb-2">
                  {procedureLinks.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => { setMenuOpen(false); setMobileProcOpen(false); }}
                      className="text-[13px] text-muted hover:text-navy transition-colors duration-150 py-1.5 no-underline"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/patient-testimonials"
              onClick={() => setMenuOpen(false)}
              className="text-muted text-[13px] tracking-[0.06em] uppercase font-medium hover:text-navy transition-colors duration-200 py-1 no-underline"
            >
              Patient Testimonials
            </Link>
            <Link
              href="/patient-stories"
              onClick={() => setMenuOpen(false)}
              className="text-muted text-[13px] tracking-[0.06em] uppercase font-medium hover:text-navy transition-colors duration-200 py-1 no-underline"
            >
              Patient Stories
            </Link>

          </div>

          <div className="px-6 pb-6 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-navy text-white px-[22px] py-[9px] rounded-[2px] text-[12px] tracking-widest uppercase font-medium text-center hover:bg-navy-mid transition-colors duration-200 no-underline"
            >
              Contact Us
            </Link>
            <a
              href="tel:4074251566"
              className="block text-center text-[13px] text-muted no-underline hover:text-navy"
            >
              407-425-1566
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
