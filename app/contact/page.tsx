import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Dr. Ioannis Loumiotis, MD",
  description:
    "Schedule a consultation with Dr. Loumiotis at AdventHealth Orlando. Phone, email, and secure message form.",
};

export default function ContactPage() {
  return (
      <main className="pt-[68px]">
        <Contact />
      </main>
  );
}
