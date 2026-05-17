import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const RWJB_STORY_URL =
  "https://www.rwjbh.org/patient-stories/life-after-open-heart-surgery-looking-forward-to/";

export const metadata: Metadata = {
  title: "Patient Stories – Dr. Ioannis Loumiotis, MD",
  description:
    "Featured patient journey from RWJBarnabas Health during Dr. Loumiotis’s prior practice.",
};

export default function PatientStoriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[68px] bg-cream min-h-[70vh]">
        <div className="max-w-[860px] mx-auto px-6 md:px-12 py-20">
          <div className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-4">
            <span className="block w-6 h-px bg-gold shrink-0" />
            RWJBarnabas Published Patient Story
          </div>
          <h1 className="font-serif text-[36px] sm:text-[42px] leading-[1.15] font-medium text-navy mb-3">
            Complex Aortic &amp; Open-Heart Surgery: A Featured Patient Journey
          </h1>

          <div className="space-y-6 text-[15px] text-muted leading-[1.9] mb-10">
            <p>
              During my tenure as a cardiothoracic and aortic surgeon at RWJBarnabas Health, I cared for patients with some of the most challenging cardiovascular conditions, including connective-tissue disorders and multi-redo sternotomies.
            </p>
            <p>
              One of these stories was featured by RWJBarnabas Health and highlights the successful outcome of a patient who had undergone multiple prior heart surgeries and required extensive aortic reconstruction.
            </p>
          </div>

          <div className="bg-white border border-navy/10 rounded-[4px] p-6 md:p-8 text-[13px] text-muted leading-[1.8]">
            <p className="font-medium text-navy mb-2">Note</p>
            <p>
              This story is shared for educational purposes and reflects my previous surgical practice at RWJBarnabas Health. All patient information remains the property of RWJBarnabas Health. No identifiable patient details are reproduced here.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={RWJB_STORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white text-[12px] tracking-widest uppercase font-medium px-6 py-3.5 rounded-full no-underline hover:bg-navy-mid transition-colors duration-200 shadow-sm"
            >
              Read more
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4"
                aria-hidden
              >
                <path d="M4 8h8M10 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link
              href="/patient-testimonials"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-navy/20 text-navy text-[12px] tracking-widest uppercase font-medium no-underline hover:border-gold hover:bg-white transition-all duration-200"
            >
              Patient reviews
            </Link>
          </div>

          <p className="mt-8 text-[12px] text-muted">
            External link opens the full story on{" "}
            <a
              href={RWJB_STORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline-offset-2 hover:underline"
            >
              rwjbh.org
            </a>{" "}
            in a new tab.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
