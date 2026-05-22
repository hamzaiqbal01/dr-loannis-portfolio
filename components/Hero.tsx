import Link from "next/link";
import Image from "next/image";
import HeroRight3D from "./HeroRight3D";

const stats = [{ num: "NYC", label: "Weill Cornell Trained" }];

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 pt-[68px]">
      {/* ── Left panel – Navy ── */}
      <div className="bg-navy flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 relative overflow-hidden hero-animate">
        {/* Decorative circles */}
        <div className="absolute -top-16 -left-16 w-[300px] h-[300px] border border-gold/15 rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] border border-gold/10 rounded-full pointer-events-none" />

        {/* Eyebrow */}
        <div className="relative z-10 flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-gold font-medium mb-6">
          <span className="block w-8 h-px bg-gold shrink-0" />
          Director of Thoracic Aortic Surgery
        </div>

        {/* Title */}
        <h1 className="relative z-10 font-serif text-[46px] sm:text-[56px] leading-[1.1] font-medium text-white mb-6">
          Expert in Complex
          <br />
          Cardiac &amp;{" "}
          <em className="text-gold-light italic font-normal">
            Aortic
          </em>{" "}
          Surgery
        </h1>

        {/* Description */}
        <p className="relative z-10 text-white/65 text-[14px] leading-[1.8] max-w-[400px] mb-10">
          Board-certified cardiac and aortic surgeon at AdventHealth Orlando,
          specializing in the full spectrum of adult cardiac surgery and complex
          aortic procedures.
        </p>

        {/* CTA Buttons */}
        <div className="relative z-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-gold text-white px-7 py-3.5 rounded-[2px] text-[12px] tracking-widest uppercase font-medium no-underline hover:bg-gold-light transition-colors duration-200"
          >
            Request Appointment
          </a>
          <Link
            href="/about"
            className="bg-transparent text-white/80 border border-white/25 px-7 py-3.5 rounded-[2px] text-[12px] tracking-widest uppercase font-medium no-underline hover:border-white/60 hover:text-white transition-all duration-200 inline-flex items-center justify-center"
          >
            Learn About Dr. Loumiotis
          </Link>
        </div>

        {/* Stats */}
        <div className="relative z-10 flex items-center gap-10 mt-14 pt-8 border-t border-white/10">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-white/20">
            <Image
              src="/American-Board-of-Thoracic-Surgery-logo.png"
              alt="American Board of Thoracic Surgery"
              fill
              className="object-contain p-1.5"
              sizes="80px"
            />
          </div>
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div className="font-serif text-[36px] font-medium text-gold-light leading-none">
                {num}
              </div>
              <div className="text-[11px] text-white/50 tracking-[0.08em] uppercase mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right panel – 3D ── */}
      <HeroRight3D />
    </section>
  );
}
