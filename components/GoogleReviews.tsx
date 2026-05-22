import { GOOGLE_MAP_EMBED_URL, GOOGLE_MAPS_REVIEWS_URL, PRACTICE_ADDRESS } from "@/lib/site-links";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-gold" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.26l-4.94 2.45.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-cream-deep border-y border-navy/8">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-4">
              <span className="block w-6 h-px bg-gold shrink-0" />
              Patient Reviews
            </div>

            <h2 className="font-serif text-[42px] leading-[1.15] font-medium text-navy mb-4">
              Google Reviews
            </h2>

            <div className="flex items-center gap-3 mb-5">
              <StarRow />
              <span className="text-[13px] text-muted">
                Verified patient reviews on Google
              </span>
            </div>

            <p className="text-[15px] text-muted leading-[1.85] mb-8 max-w-lg">
              Read what patients share about their experience with Dr. Loumiotis
              at AdventHealth Orlando. View ratings and written reviews on
              Google Maps, or share your own experience after your care.
            </p>

            <p className="text-[14px] text-navy font-medium mb-8">
              {PRACTICE_ADDRESS}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={GOOGLE_MAPS_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-navy text-white px-6 py-3.5 rounded-[2px] text-[12px] tracking-widest uppercase font-medium no-underline hover:bg-navy-mid transition-colors duration-200"
              >
                <GoogleIcon className="w-4 h-4 shrink-0" />
                Read Google Reviews
              </a>
              <a
                href={GOOGLE_MAPS_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-navy/20 text-navy px-6 py-3.5 rounded-[2px] text-[12px] tracking-widest uppercase font-medium no-underline hover:border-gold hover:bg-white transition-all duration-200"
              >
                Leave a Review
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-2 -left-2 w-full h-full bg-navy/5 rounded-[4px] translate-x-2 translate-y-2 pointer-events-none" />
            <div className="relative overflow-hidden rounded-[4px] border border-navy/10 bg-white shadow-[0_8px_32px_rgba(11,31,58,0.08)]">
              <iframe
                title="AdventHealth Cardiovascular Surgery at Orlando on Google Maps"
                src={GOOGLE_MAP_EMBED_URL}
                className="w-full h-[320px] sm:h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={GOOGLE_MAPS_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 inset-x-0 flex items-center justify-center gap-2 bg-navy/90 text-white text-[11px] tracking-widest uppercase font-medium py-3 no-underline hover:bg-navy transition-colors duration-200"
              >
                <GoogleIcon className="w-3.5 h-3.5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
