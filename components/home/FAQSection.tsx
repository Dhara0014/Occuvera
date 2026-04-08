"use client";

import { useState } from "react";
import { Plus, Minus, Phone, Mail } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: "How long does a comprehensive eye exam take?",
    a: "Our thorough clinical eye examination typically takes 30–45 minutes. This includes advanced visual acuity testing, digital refraction, and a session with our board-certified optometrist.",
  },
  {
    q: "Is an appointment mandatory for diagnostics?",
    a: "While we welcome walk-ins, we highly recommend booking an appointment to ensure you have a dedicated diagnostic slot with our specialists and minimal wait time.",
  },
  {
    q: "What designer brands do you carry?",
    a: "We curate from over 200 global luxury labels including Ray-Ban, Prada, Tom Ford, Gucci, Versace, Oakley, and Persol, alongside independent designer collections.",
  },
  {
    q: "How soon can I receive my new glasses?",
    a: "Standard prescription lenses are typically ready within 24–48 hours. Specialized progressive or high-index lenses may require 3–5 lab business days.",
  },
  {
    q: "What is your warranty for frames and lenses?",
    a: "Every frame and lens pair comes with a comprehensive 1-year global warranty against manufacturing defects and structural issues.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F8FAFC]" id="faq">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column — clean, no heavy dark card */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            <div>
              <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-black text-[#0B1C2D] tracking-tight leading-tight mb-5">
                Frequently Asked{" "}
                <span className="text-[#0D9488]">Questions</span>
              </h2>
              <p className="text-[#5a6a7a] font-[var(--font-inter)] text-lg leading-relaxed">
                Find quick answers to your questions about our clinical services, eye tests, and designer collections.
              </p>
            </div>

            {/* Simple, clean contact block */}
            <div className="space-y-4 pt-4 border-t border-[#0B1C2D]/5">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#0D9488]">
                Still have questions?
              </p>
              <a
                href="tel:+915551234567"
                className="flex items-center gap-3 text-[#0B1C2D] font-[var(--font-inter)] font-semibold hover:text-[#0D9488] transition-colors"
              >
                <Phone className="size-4 text-[#0D9488]" />
                (555) 123-4567
              </a>
              <a
                href="mailto:occuveraoptical@gmail.com"
                className="flex items-center gap-3 text-[#0B1C2D] font-[var(--font-inter)] font-semibold hover:text-[#0D9488] transition-colors"
              >
                <Mail className="size-4 text-[#0D9488]" />
                occuveraoptical@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column — Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  openIndex === i
                    ? "border-[#0D9488]/40 shadow-lg"
                    : "border-[#0B1C2D]/5 hover:border-[#0B1C2D]/10"
                }`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-left px-7 py-5 gap-4 outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span
                    className={`font-[var(--font-montserrat)] font-bold text-base md:text-lg transition-colors ${
                      openIndex === i ? "text-[#0D9488]" : "text-[#0B1C2D]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === i
                        ? "bg-[#0D9488] text-white"
                        : "bg-[#F8FAFC] text-[#0B1C2D] border border-[#0B1C2D]/10"
                    }`}
                  >
                    {openIndex === i ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-400 overflow-hidden ${
                    openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-7 pb-6 text-[#5a6a7a] font-[var(--font-inter)] leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
