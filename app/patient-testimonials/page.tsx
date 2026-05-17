import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials – Dr. Ioannis Loumiotis, MD",
  description:
    "Patient reviews on Healthgrades and RateMDs, and a message from Dr. Loumiotis.",
};

export default function PatientTestimonialsPage() {
  return (
      <main className="pt-[68px] bg-cream min-h-[70vh]">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 py-20">
          <div className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-4">
            <span className="block w-6 h-px bg-gold shrink-0" />
            Patient Reviews
          </div>
          <h1 className="font-serif text-[42px] sm:text-[48px] leading-[1.12] font-medium text-navy mb-10">
            Patient Reviews
          </h1>

          <div className="space-y-6 text-[15px] text-muted leading-[1.85] mb-12">
            <p className="text-navy font-medium">Read reviews on:</p>
            <ul className="list-none space-y-3 pl-0">
              <li>
                <a
                  href="https://www.healthgrades.com/physician/dr-ioannis-loumiotis-3sh6l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-medium no-underline hover:text-navy transition-colors duration-200"
                >
                  Read Reviews on Healthgrades →
                </a>
              </li>
              <li>
                <a
                  href="https://www.ratemds.com/doctor-ratings/3387483/Dr-IOANNIS-LOUMIOTIS-Tucson-AZ.html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-medium no-underline hover:text-navy transition-colors duration-200"
                >
                  Read Reviews on RateMDs →
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-navy/10 pt-12">
            <h2 className="font-serif text-[26px] font-medium text-navy mb-6">
              From Dr. Loumiotis
            </h2>
            <blockquote className="text-[15px] text-muted leading-[1.9] space-y-5 border-l-2 border-gold pl-6 not-italic">
              <p>
                It was a privilege caring for you. Many patients facing heart surgery feel anxious and uncertain. Hearing from someone who has gone through it can make a tremendous difference. Thank you for your trust.
              </p>
              <p className="text-navy font-medium">
                Warm regards,
                <br />
                <span className="block mt-4 font-serif text-[18px]">
                  Ioannis Loumiotis, MD
                </span>
              </p>
            </blockquote>
          </div>

          <div className="mt-14">
            <Link
              href="/patient-stories"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-gold no-underline hover:text-navy transition-colors duration-200"
            >
              Read a featured patient story
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </main>
  );
}
