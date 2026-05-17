export default function Footer() {
  return (
    <footer className="bg-navy text-white/50 py-12 text-center text-[13px]">
      <div className="font-serif text-[24px] text-white font-medium mb-2">
        Dr. Ioannis Loumiotis, MD
      </div>
      <p>Director of Thoracic Aortic Surgery · AdventHealth Orlando</p>
      <p className="mt-4">
        <a
          href="tel:4074251566"
          className="text-gold-light no-underline hover:text-gold transition-colors duration-200"
        >
          407-425-1566
        </a>
        &nbsp;·&nbsp;
        <a
          href="mailto:drloumiotis@gmail.com"
          className="text-gold-light no-underline hover:text-gold transition-colors duration-200"
        >
          drloumiotis@gmail.com
        </a>
      </p>
      <p className="mt-6 text-[11px] text-white/40">
        © 2024 Dr. Ioannis Loumiotis. All rights reserved.
      </p>
    </footer>
  );
}
