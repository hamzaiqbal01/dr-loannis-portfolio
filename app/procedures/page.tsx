import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { procedures } from "@/lib/procedures-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surgical Procedures – Dr. Ioannis Loumiotis, MD",
  description:
    "Dr. Loumiotis performs the full spectrum of Adult Cardiac Surgery and Aortic Surgery. Learn about each procedure.",
};

export default function ProceduresPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[68px]">
        {/* ── Hero ── */}
        <div className="bg-navy relative overflow-hidden py-20 px-6">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] border border-gold/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-[280px] h-[280px] border border-gold/[0.07] rounded-full pointer-events-none" />

          <div className="max-w-[1320px] mx-auto px-0 md:px-6 relative z-10">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-gold font-medium mb-6">
              <span className="block w-6 h-px bg-gold shrink-0" />
              Surgical Specializations
            </div>
            <h1 className="font-serif text-[52px] sm:text-[64px] leading-[1.08] font-medium text-white mb-6">
              Procedures &amp;{" "}
              <em style={{ fontStyle: "italic" }} className="text-gold-light">
                Expertise
              </em>
            </h1>
            <p className="text-white/60 text-[15px] leading-[1.8] max-w-2xl">
              Dr. Loumiotis performs the whole spectrum of Adult Cardiac Surgery
              and Aortic Surgery, treating a wide array of cardiovascular
              diseases. Treatments are always tailored to the patient&apos;s
              individual pathology following the most current guidelines.
              <br className="mt-2 block" />
              Dr. Loumiotis takes the time to explain the diagnoses, possible
              treatment options, risks and benefits associated with each one of
              these procedures.
            </p>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="bg-cream py-20 px-6">
          <div className="max-w-[1320px] mx-auto px-0 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {procedures.map((proc) => (
                <div
                  key={proc.slug}
                  className="group bg-white border border-navy/10 rounded-[4px] overflow-hidden hover:shadow-[0_8px_40px_rgba(11,31,58,0.1)] hover:border-gold/40 transition-all duration-300 flex flex-col sm:flex-row"
                >
                  {/* Image panel */}
                  <div className="relative sm:w-[220px] shrink-0 overflow-hidden min-h-[180px] sm:min-h-0">
                    <Image
                      src={proc.image}
                      alt={proc.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:640px) 100vw, 220px"
                    />
                    {/* Navy overlay */}
                    <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-colors duration-300" />
                    {/* Number */}
                    <div className="absolute bottom-3 left-4 font-serif text-[44px] font-medium text-white/20 leading-none select-none">
                      {proc.num}
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className="flex flex-col justify-between p-8 flex-1">
                    <div>
                      <div className="text-[10px] tracking-[0.18em] uppercase text-gold font-medium mb-3">
                        Procedure {proc.num}
                      </div>
                      <h2 className="font-serif text-[24px] font-medium text-navy leading-snug mb-4">
                        {proc.title}
                      </h2>
                      <p className="text-[13px] text-muted leading-[1.8]">
                        {proc.shortDesc}
                      </p>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={`/procedures/${proc.slug}`}
                        className="inline-flex items-center gap-3 bg-navy text-white text-[12px] tracking-widest uppercase font-medium px-6 py-3 rounded-[2px] no-underline hover:bg-gold transition-colors duration-200 group/btn"
                      >
                        Read More
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-navy py-20 px-6">
          <div className="max-w-[1320px] mx-auto px-0 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-4">
                <span className="block w-5 h-px bg-gold shrink-0" />
                Get In Touch
              </div>
              <h2 className="font-serif text-[36px] text-white font-medium leading-tight">
                Schedule a Consultation
              </h2>
              <p className="text-white/55 text-[14px] mt-2 max-w-md">
                Dr. Loumiotis takes the time to explain diagnoses, treatment
                options, risks and benefits — tailored to your individual needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:4074251566"
                className="bg-gold text-white px-8 py-3.5 rounded-[2px] text-[12px] tracking-widest uppercase font-medium no-underline hover:bg-gold-light transition-colors duration-200 text-center"
              >
                407-425-1566
              </a>
              <Link
                href="/#contact"
                className="border border-white/25 text-white/80 px-8 py-3.5 rounded-[2px] text-[12px] tracking-widest uppercase font-medium no-underline hover:border-white/60 hover:text-white transition-all duration-200 text-center"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
