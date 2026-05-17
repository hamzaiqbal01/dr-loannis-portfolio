import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { procedures, getProcedure } from "@/lib/procedures-data";
import type { Metadata } from "next";

/* ── Static params for pre-rendering ── */
export function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proc = getProcedure(slug);
  if (!proc) return {};
  return {
    title: `${proc.title} – Dr. Ioannis Loumiotis, MD`,
    description: proc.shortDesc,
  };
}

/* ── Page ── */
export default async function ProcedureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proc = getProcedure(slug);
  if (!proc) notFound();

  const currentIdx = procedures.findIndex((p) => p.slug === slug);
  const prev = procedures[currentIdx - 1];
  const next = procedures[currentIdx + 1];

  return (
    <>
      <Navbar />

      <main className="pt-[68px]">
        {/* ── Hero ── */}
        <div className="bg-navy relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] border border-gold/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] border border-gold/[0.07] rounded-full pointer-events-none" />

          <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-20 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] text-white/40 mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors no-underline">Home</Link>
              <span>/</span>
              <Link href="/procedures" className="hover:text-white/70 transition-colors no-underline">Procedures</Link>
              <span>/</span>
              <span className="text-gold/80">{proc.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
              {/* Procedure image */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-full overflow-hidden border-2 border-gold/30 shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-4 ring-white/5">
                <Image
                  src={proc.image}
                  alt={proc.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 144px, 176px"
                  priority
                />
              </div>

              <div>
                <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-gold font-medium mb-4">
                  <span className="block w-5 h-px bg-gold shrink-0" />
                  Procedure {proc.num}
                </div>
                <h1 className="font-serif text-[44px] sm:text-[56px] leading-[1.08] font-medium text-white mb-5">
                  {proc.title}
                </h1>
                <p className="text-white/60 text-[15px] leading-[1.85] max-w-2xl">
                  {proc.intro}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sub-procedures ── */}
        {proc.items.length > 0 && (
          <div className="bg-cream py-24 px-6">
            <div className="max-w-[1320px] mx-auto px-0 md:px-6">
              <div className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-4">
                <span className="block w-5 h-px bg-gold shrink-0" />
                What We Treat
              </div>
              <h2 className="font-serif text-[36px] font-medium text-navy mb-12">
                Specific Procedures
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {proc.items.map(({ name, body }, i) => (
                  <div
                    key={name}
                    className="bg-white border border-navy/10 rounded-[4px] p-7 hover:border-gold hover:shadow-[0_4px_24px_rgba(184,150,90,0.1)] transition-all duration-200 flex flex-col gap-4"
                  >
                    {/* Index + title */}
                    <div className="flex items-start gap-3">
                      <span className="font-serif text-[22px] text-gold/40 font-medium leading-none shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-[18px] font-medium text-navy leading-snug">
                        {name}
                      </h3>
                    </div>
                    {/* Divider */}
                    <div className="h-px bg-navy/8 mx-0" />
                    {/* Body */}
                    <p className="text-[13px] text-muted leading-[1.85]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── No sub-items fallback (TAVR / MICS) ── */}
        {proc.items.length === 0 && (
          <div className="bg-cream py-24 px-6">
            <div className="max-w-[860px] mx-auto px-0 md:px-6 text-center">
              <p className="text-[16px] text-muted leading-[1.9]">{proc.intro}</p>
            </div>
          </div>
        )}

        {/* ── Prev / Next navigation ── */}
        <div className="bg-cream-deep border-t border-navy/10 py-12 px-6">
          <div className="max-w-[1320px] mx-auto px-0 md:px-6 flex items-center justify-between gap-4 flex-wrap">
            {prev ? (
              <Link
                href={`/procedures/${prev.slug}`}
                className="group flex items-center gap-3 no-underline"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold transition-transform duration-200 group-hover:-translate-x-1">
                  <path d="M13 8H3M7 4L3 8l4 4" />
                </svg>
                <div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-muted font-medium">Previous</div>
                  <div className="font-serif text-[17px] text-navy font-medium leading-tight">{prev.title}</div>
                </div>
              </Link>
            ) : <div />}

            <Link
              href="/procedures"
              className="text-[12px] tracking-widest uppercase font-medium text-muted hover:text-navy transition-colors duration-200 no-underline"
            >
              All Procedures
            </Link>

            {next ? (
              <Link
                href={`/procedures/${next.slug}`}
                className="group flex items-center gap-3 no-underline text-right"
              >
                <div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-muted font-medium">Next</div>
                  <div className="font-serif text-[17px] text-navy font-medium leading-tight">{next.title}</div>
                </div>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-navy py-20 px-6">
          <div className="max-w-[1320px] mx-auto px-0 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-4">
                <span className="block w-5 h-px bg-gold shrink-0" />
                Request a Consultation
              </div>
              <h2 className="font-serif text-[34px] text-white font-medium leading-tight">
                Discuss {proc.title}
              </h2>
              <p className="text-white/55 text-[14px] mt-2 max-w-md">
                Dr. Loumiotis takes the time to explain diagnoses, treatment
                options, risks and benefits associated with each procedure —
                tailored to your individual needs.
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
