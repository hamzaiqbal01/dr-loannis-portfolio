import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-24">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-16 lg:gap-28 items-center">

          {/* ── Left – Portrait ── */}
          <div>
            {/* Section tag */}
            <div className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-8">
              <span className="block w-6 h-px bg-gold shrink-0" />
              Biography
            </div>

            {/* Creative image frame */}
            <div className="relative mt-2">
              {/* Navy shadow layer – shifted behind */}
              <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 bg-navy rounded-[4px]" />

              {/* Gold corner bracket – top left */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold z-20 pointer-events-none" />
              {/* Gold corner bracket – bottom right */}
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold z-20 pointer-events-none" />

              {/* Image */}
              <div className="relative z-10 overflow-hidden rounded-[4px]">
                <Image
                  src="/Loumiotis MD.avif"
                  alt="Dr. Ioannis Loumiotis, MD — Aortic & Cardiac Surgeon"
                  width={480}
                  height={600}
                  className="w-full h-auto object-cover object-top"
                  priority
                />

                {/* Bottom gradient → name overlay */}
                <div className="absolute inset-x-0 bottom-0 h-[48%] bg-linear-to-t from-navy via-navy/75 to-transparent pointer-events-none" />

                {/* Overlay: specialty + name */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div className="flex items-center gap-2 text-[9px] tracking-[0.22em] uppercase text-gold font-medium mb-2">
                    <span className="block w-4 h-px bg-gold shrink-0" />
                    MD · Aortic &amp; Cardiac Surgeon
                  </div>
                  <div className="font-serif text-[28px] text-white font-medium leading-tight">
                    Ioannis Loumiotis
                  </div>
                  <div className="text-[12px] text-white/50 mt-1.5 tracking-wide">
                    AdventHealth Orlando
                  </div>
                </div>
              </div>

              {/* Floating badge – Board Certified (top right) */}
              <div className="absolute -top-5 -right-5 z-20 bg-gold rounded-[3px] px-3.5 py-2.5 shadow-[0_6px_24px_rgba(184,150,90,0.55)]">
                <div className="font-serif text-[22px] text-white font-medium leading-none">2×</div>
                <div className="text-[8px] tracking-[0.14em] uppercase text-white/80 mt-0.5">
                  Board Certified
                </div>
              </div>

              {/* Floating badge – Weill Cornell (bottom left) */}
              <div className="absolute -bottom-5 -left-5 z-20 bg-navy border border-white/10 rounded-[3px] px-3.5 py-2.5 shadow-[0_6px_20px_rgba(11,31,58,0.4)]">
                <div className="text-[8px] tracking-[0.14em] uppercase text-gold mb-0.5">
                  Weill Cornell
                </div>
                <div className="text-[11px] font-medium text-white leading-none">
                  Fellowship Trained
                </div>
              </div>
            </div>
          </div>

          {/* ── Right – Name, Bio, Credentials ── */}
          <div>
            {/* Name – single line */}
            <h2 className="font-serif text-[42px] leading-[1.15] font-medium text-navy mb-2 whitespace-nowrap">
              Ioannis Loumiotis, MD
            </h2>

            {/* Subtitle */}
            <p className="text-gold text-[15px] font-medium tracking-wide mb-8">
              Aortic and Adult Cardiac Surgeon
            </p>

            {/* Key highlights */}
            <div className="flex flex-col gap-6 mb-12">
              {/* Role */}
              <div className="flex gap-4 items-start">
                <span className="mt-[9px] block w-5 h-px bg-gold shrink-0" />
                <div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-gold font-medium mb-1">
                    Current Position
                  </div>
                  <p className="text-[15px] text-navy font-medium leading-snug">
                    Director of Thoracic Aortic Surgery
                  </p>
                  <p className="text-[14px] text-muted mt-0.5">AdventHealth Orlando</p>
                </div>
              </div>

              {/* Specialty */}
              <div className="flex gap-4 items-start">
                <span className="mt-[9px] block w-5 h-px bg-gold shrink-0" />
                <div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-gold font-medium mb-1">
                    Specialty
                  </div>
                  <p className="text-[15px] text-navy font-medium leading-snug">
                    Aortic and Cardiovascular Surgery
                  </p>
                </div>
              </div>

              {/* Training */}
              <div className="flex gap-4 items-start">
                <span className="mt-[9px] block w-5 h-px bg-gold shrink-0" />
                <div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-gold font-medium mb-1">
                    Training
                  </div>
                  <p className="text-[15px] text-muted leading-[1.8]">
                    MD with Distinction, University of Athens · General Surgery residencies at University of Arizona &amp; RWJBarnabas Health · Cardiothoracic Fellowship, Montefiore / Albert Einstein · Advanced Aortic Surgery Fellowship,{" "}
                    <span className="text-navy font-medium">NewYork-Presbyterian, Weill Cornell</span>
                  </p>
                </div>
              </div>

              {/* Expertise tags */}
              <div className="flex gap-4 items-start">
                <span className="mt-[9px] block w-5 h-px bg-gold shrink-0" />
                <div>
                  <div className="text-[11px] tracking-[0.14em] uppercase text-gold font-medium mb-3">
                    Expert In
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Adult Cardiac Surgery",
                      "Aortic Surgery",
                      "Aneurysms",
                      "Valve Surgery",
                      "TAVR",
                      "Cardiac Surgery Reoperations",
                      "Minimally Invasive Cardiac Surgery",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] text-navy border border-navy/15 px-3 py-1 rounded-[2px] bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-3 mt-2 border border-navy/20 text-navy text-[12px] tracking-widest uppercase font-medium px-6 py-3.5 rounded-[2px] hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 group"
            >
              Learn More About Dr. Loumiotis
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
