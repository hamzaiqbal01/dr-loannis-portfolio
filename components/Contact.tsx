"use client";

import { useState } from "react";

const contactItems = [
  { label: "Phone", value: "407-425-1566", href: "tel:4074251566" },
  {
    label: "Email",
    value: "drloumiotis@gmail.com",
    href: "mailto:drloumiotis@gmail.com",
  },
  { label: "Hospital", value: "AdventHealth Orlando" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic goes here
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left – contact info ── */}
          <div>
            {/* Section tag */}
            <div className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-gold font-medium mb-4">
              <span className="block w-6 h-px bg-gold flex-shrink-0" />
              Contact
            </div>

            <h2 className="font-serif text-[42px] leading-[1.15] font-medium text-navy mb-6">
              Schedule a Consultation
            </h2>

            <p className="text-muted text-[14px] mb-8 max-w-md">
              Dr. Loumiotis takes the time to explain diagnoses, treatment
              options, risks, and benefits — tailored to your individual needs.
            </p>

            <div className="flex flex-col gap-0">
              {contactItems.map(({ label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-4 items-start py-6 border-b border-navy/[0.12] last:border-b-0"
                >
                  <div>
                    <div className="text-[11px] tracking-[0.1em] uppercase text-gold font-medium mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-[15px] text-navy font-medium no-underline hover:text-gold transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-[15px] text-navy font-medium">
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Patient Reviews */}
              <div className="py-6">
                <div className="text-[11px] tracking-[0.1em] uppercase text-gold font-medium mb-1">
                  Patient Reviews
                </div>
                <div className="text-[13px] text-muted">
                  Available on{" "}
                  <a
                    href="https://www.healthgrades.com/physician/dr-ioannis-loumiotis-3sh6l"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors duration-200"
                  >
                    Healthgrades
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.ratemds.com/doctor-ratings/3387483/Dr-IOANNIS-LOUMIOTIS-Tucson-AZ.html/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors duration-200"
                  >
                    RateMDs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right – contact form ── */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate
          >
            {(
              [
                { name: "name", type: "text", placeholder: "Full Name" },
                { name: "email", type: "email", placeholder: "Email Address" },
                { name: "phone", type: "tel", placeholder: "Phone Number" },
              ] as const
            ).map(({ name, type, placeholder }) => (
              <input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={form[name]}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-navy/[0.12] rounded-[2px] bg-white font-sans text-[14px] text-[#1a1a1a] placeholder:text-muted/60 outline-none focus:border-gold transition-colors duration-200"
              />
            ))}
            <textarea
              name="message"
              placeholder="Please briefly describe your condition or reason for consultation…"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-navy/[0.12] rounded-[2px] bg-white font-sans text-[14px] text-[#1a1a1a] placeholder:text-muted/60 outline-none focus:border-gold transition-colors duration-200 resize-y min-h-[120px]"
            />
            <div>
              <button
                type="submit"
                className="bg-navy text-white px-7 py-3.5 rounded-[2px] text-[12px] tracking-[0.1em] uppercase font-medium hover:bg-navy-mid transition-colors duration-200 cursor-pointer border-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
