"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  review: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    rating: 5,
    review: "I've been wearing glasses for 15 years and this was by far the most thorough eye exam I've ever had. My new prescription is spot-on. The frame selection is simply stunning.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85&fit=crop&crop=face",
  },
  {
    name: "Rahul Mehta",
    role: "Architect",
    rating: 5,
    review: "Came in for blue light glasses and left with a complete style transformation. The team helped me find frames I never would have picked myself. Fantastic experience.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85&fit=crop&crop=face",
  },
  {
    name: "Ananya Patel",
    role: "Doctor",
    rating: 5,
    review: "As a medical professional, I trust the diagnostic quality here. The retinal scan and digital refraction gave a more accurate result than my previous clinic.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=85&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Header - Reference Style */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-black text-[#0B1C2D] tracking-tighter mb-6">
            Customer <span className="text-[#0D9488]">Testimonials</span>
          </h2>
          <p className="text-[#5a6a7a] font-[var(--font-inter)] leading-relaxed text-lg">
            Don't just take our word for it. Here's what our satisfied patients have to say about their experience.
          </p>
        </div>

        {/* Testimonial Cards - Reference Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="relative bg-[#F8FAFC] rounded-2xl p-8 border border-[#0B1C2D]/5 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="size-10 text-[#0D9488] opacity-20 mb-6" aria-hidden="true" />

              <div
                className="flex gap-1 mb-4"
                role="img"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }, (_, j) => (
                  <Star key={j} className="size-4 fill-[#F59E0B] text-[#F59E0B]" aria-hidden="true" />
                ))}
              </div>

              <p className="text-[#0B1C2D]/80 font-[var(--font-inter)] leading-relaxed italic mb-8">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[#0B1C2D]/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-[var(--font-montserrat)] font-bold text-[#0B1C2D]">
                    {t.name}
                  </h4>
                  <p className="text-xs font-bold text-[#0D9488] tracking-widest uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
