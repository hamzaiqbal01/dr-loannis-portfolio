import Hero from "@/components/Hero";
import About from "@/components/About";
import GoogleReviews from "@/components/GoogleReviews";
import Procedures from "@/components/Procedures";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <GoogleReviews />
      <Procedures />
      <Contact />
    </main>
  );
}
