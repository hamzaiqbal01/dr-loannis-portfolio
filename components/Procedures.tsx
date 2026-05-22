import Link from "next/link";
import Image from "next/image";

const procedures = [
  {
    num: "01",
    name: "Complex Aortic Surgery",
    href: "/procedures/complex-aortic-surgery",
    img: "/proc-complex-aortic.jpg",
    desc: "Full aortic spectrum — root to bifurcation — including aneurysm repair, dissection management, and advanced reconstructive techniques.",
  },
  {
    num: "02",
    name: "Aortic Valve Repair & Replacement",
    href: "/procedures/aortic-valve-repair",
    img: "/proc-valve.jpg",
    desc: "Valve-sparing root surgery, bicuspid valve repair, and tailored replacements to restore optimal hemodynamic function.",
  },
  {
    num: "03",
    name: "Adult Cardiac Surgery",
    href: "/procedures/adult-cardiac-surgery",
    img: "/proc-adult-cardiac.jpg",
    desc: "Coronary artery bypass, multi-arterial grafting, mitral valve procedures, and comprehensive cardiac reoperations.",
  },
  {
    num: "04",
    name: "TAVR",
    href: "/procedures/tavr",
    img: "/proc-tavr.jpg",
    desc: "Transcatheter Aortic Valve Replacement using cutting-edge catheter-based techniques for patients across all risk profiles.",
  },
  {
    num: "05",
    name: "Minimally Invasive Cardiac Surgery",
    href: "/procedures/minimally-invasive-cardiac-surgery",
    img: "/proc-minimally-invasive.jpg",
    desc: "Smaller incisions, faster recovery, and reduced complications — delivering world-class results with minimal disruption.",
  },
  {
    num: "06",
    name: "The Ross Procedure",
    href: "/procedures/ross-procedure",
    img: "/proc-ross.jpg",
    desc: "A specialized valve replacement using the patient's own pulmonary valve, offering exceptional durability and quality of life.",
  },
];

export default function Procedures() {
  return (
    <section id="procedures" className="py-24 bg-navy">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        {/* Section tag */}
        <div className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-4">
          <span className="block w-6 h-px bg-gold shrink-0" />
          Procedures
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-0">
          <h2 className="font-serif text-[42px] leading-[1.15] font-medium text-white">
            Surgical Specializations
          </h2>
          <Link
            href="/procedures"
            className="shrink-0 inline-flex items-center gap-3 border border-gold/40 text-gold text-[12px] tracking-widest uppercase font-medium px-6 py-3 rounded-[2px] no-underline hover:bg-gold hover:text-white hover:border-gold transition-all duration-200 group self-start sm:self-auto mb-1"
          >
            View All Procedures
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {procedures.map(({ num, name, href, img, desc }) => (
            <Link
              key={num}
              href={href}
              className="group relative overflow-hidden rounded-[4px] no-underline flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300" />
                {/* Number badge */}
                <div className="absolute top-4 left-4 font-serif text-[36px] font-medium text-white/20 leading-none select-none">
                  {num}
                </div>
              </div>

              {/* Content */}
              <div className="bg-navy border border-white/8 p-6 flex flex-col gap-3 flex-1 group-hover:bg-gold/8 group-hover:border-gold/30 transition-all duration-300">
                <div className="font-serif text-[20px] font-medium text-white leading-snug group-hover:text-gold-light transition-colors duration-300">
                  {name}
                </div>
                <div className="text-[13px] text-white/50 leading-[1.7] line-clamp-2">{desc}</div>
                <div className="flex items-center gap-2 text-[11px] tracking-widest uppercase font-medium text-gold mt-auto pt-1">
                  Read More
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 -translate-x-0.5 group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
