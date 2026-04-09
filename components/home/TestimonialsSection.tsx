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
    <section className="py-20 md:py-24 bg-[#F8FAFC] relative overflow-hidden" id="testimonials">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute -top-24 -right-24 text-[20rem] font-montserrat font-black text-[#0B1C2D]/[0.02] select-none pointer-events-none uppercase">
        Voices
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-[#0B1C2D] tracking-tighter mb-8 leading-tight">
                Trust The <span className="text-[#0D9488]">Difference.</span>
            </h2>
            <p className="text-[#5a6a7a] font-inter leading-relaxed text-xl max-w-2xl mx-auto font-light">
                Our reputation is built on clinical precision and patient care. Hear why Ahmedabad trusts Occuvera with their vision.
            </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="relative group flex flex-col h-full"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-transparent hover:border-[#0D9488]/20 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Quote className="size-16 text-[#0D9488]" />
                </div>

                <div className="flex gap-1.5 mb-8">
                    {Array.from({ length: t.rating }, (_, j) => (
                        <Star key={j} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>

                <p className="text-[#0B1C2D] font-inter text-lg leading-relaxed italic mb-10 flex-grow font-light">
                  &ldquo;{t.review}&rdquo;
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-gray-50">
                    <div className="relative size-14 rounded-2xl overflow-hidden ring-4 ring-[#0D9488]/5">
                        <Image
                            src={t.avatar}
                            alt={t.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-lg font-montserrat font-black text-[#0B1C2D] tracking-tight">
                            {t.name}
                        </h4>
                        <p className="text-[10px] font-black text-[#0D9488] tracking-[0.2em] uppercase mt-1">
                            {t.role}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
