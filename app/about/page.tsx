import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "About Us – Dr. Ioannis Loumiotis, MD",
  description:
    "Aortic and cardiovascular surgeon at AdventHealth Orlando. Training, board certification, and clinical focus in adult cardiac and complex aortic surgery.",
};

export default function AboutPage() {
  return (
      <main className="pt-[68px] bg-cream">
        <div className="bg-navy relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[360px] h-[360px] border border-gold/10 rounded-full pointer-events-none" />
          <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-16 md:py-20 relative z-10">
            <div className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-gold font-medium mb-4">
              <span className="block w-6 h-px bg-gold shrink-0" />
              About Us
            </div>
            <h1 className="font-serif text-[44px] sm:text-[52px] leading-[1.08] font-medium text-white max-w-3xl">
              Ioannis Loumiotis, MD
            </h1>
            <p className="mt-4 text-[15px] text-gold-light/90 font-medium tracking-wide">
              Aortic and Cardiovascular Surgeon
            </p>
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,400px)_1fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-[100px]">
              <div className="relative">
                <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-navy rounded-[4px]" />
                <div className="relative overflow-hidden rounded-[4px] border border-navy/10">
                  <Image
                    src="/Loumiotis MD.avif"
                    alt="Ioannis Loumiotis, MD"
                    width={480}
                    height={620}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[11px] tracking-[0.14em] uppercase text-gold font-medium mb-3">
                  Connect
                </p>
                <SocialLinks />
              </div>
            </div>

            <article className="text-[15px] text-muted leading-[1.9] space-y-6">
              <p>
                Dr. Loumiotis has always been deeply inspired by the art of medicine and its profound ability to transform lives, making his choice to pursue a career in medicine both natural and compelling. He earned his medical degree with distinction from the University of Athens Medical School in Greece. Early in his career, his passion for vascular diseases led him to the prestigious Mayo Clinic in Minnesota, where he dedicated a year to researching clinical outcomes for advanced treatments of brain aneurysms.
              </p>
              <p>
                Dr. Loumiotis honed his surgical expertise through rigorous training, completing General Surgery residencies at the University of Arizona College of Medicine and RWJ Barnabas Health&apos;s Cooperman Barnabas Medical Center. His pursuit of excellence continued with a Cardiothoracic Surgery fellowship at Montefiore Medical Center, Albert Einstein College of Medicine in New York City, followed by an elite Advanced Cardiothoracic Surgery fellowship specializing in Complex Aortic Surgery at NewYork-Presbyterian Hospital, Weill Cornell Medical College. He holds dual board certifications in Cardiothoracic Surgery and General Surgery.
              </p>
              <p>
                Dr. Ioannis Loumiotis is the Director of Aortic Surgery at AdventHealth Orlando, where he is leading a comprehensive Aortic Center of Excellence. Prior to joining AdventHealth, he spearheaded the creation of a full-service Aortic Center at RWJBarnabas Health&apos;s Northern Division, serving as Director of Aortic Surgery and building one of the region&apos;s most active aortic programs.
              </p>
              <p>
                His surgical expertise encompasses the full spectrum of adult cardiac and complex aortic procedures, including coronary artery bypass surgery, multi-arterial grafting, aortic valve repair and replacement, valve-sparing root surgery, bicuspid valve repair, mitral valve repair and replacement, trans-catheter valve therapies, and cutting-edge minimally invasive cardiac surgery.
              </p>
              <p>
                Dr. Loumiotis possesses extensive experience and specialized expertise in managing intricate aortic pathologies. His practice covers the entire aorta, from the root to the bifurcation, reflecting his unwavering dedication to advancing care for the most challenging cardiovascular conditions.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <Link
                  href="/procedures"
                  className="inline-flex items-center gap-2 bg-navy text-white text-[12px] tracking-widest uppercase font-medium px-6 py-3 rounded-[2px] no-underline hover:bg-navy-mid transition-colors duration-200"
                >
                  Surgical Procedures
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-navy/20 text-navy text-[12px] tracking-widest uppercase font-medium px-6 py-3 rounded-[2px] no-underline hover:border-gold hover:bg-white transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
  );
}
