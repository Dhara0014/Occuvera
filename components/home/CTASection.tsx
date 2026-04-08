"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";

const BADGES = [
  { label: "Consultation", value: "Instant" },
  { label: "Warranty", value: "1 Year" },
  { label: "Follow-up", value: "Complimentary" },
] as const;

export default function CTASection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-3xl overflow-hidden bg-[#0B1C2D] shadow-2xl min-h-[500px] flex items-center">
          {/* Background Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80&fit=crop"
              alt="Professional Vision Care"
              fill
              sizes="100vw"
              className="object-cover opacity-10 saturate-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D] via-[#0B1C2D]/90 to-transparent" />
          </div>

          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center p-10 md:p-20">
            {/* Text Side - Reference Style */}
            <div className="lg:col-span-8 space-y-10">
              <h2 className="text-4xl md:text-6xl font-[var(--font-montserrat)] font-black text-white leading-tight tracking-tighter">
                Upgrade Your <br />
                <span className="text-[#0D9488]">Visual Health.</span>
              </h2>
              
              <p className="max-w-md text-white/60 font-[var(--font-inter)] text-lg leading-relaxed">
                Experience diagnostic precision combined with world-class eyewear curation. Join 10,000+ satisfied patients.
              </p>

              <div className="flex flex-wrap gap-5">
                <Button
                  className="h-14 px-10 text-xs font-bold uppercase tracking-widest rounded-md bg-[#0D9488] text-white hover:bg-white hover:text-[#0B1C2D] transition-all duration-300 shadow-xl"
                >
                  Book Free Exam
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest px-4">
                  <CalendarDays className="size-4 text-[#0D9488]" />
                  Instant Confirmation
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-10 pt-10 border-t border-white/10">
                {BADGES.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#0D9488] mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-white uppercase">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reference Image - Right Side (Desktop) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=700&q=85&fit=crop"
                  alt="Optical Specialist"
                  fill
                  sizes="(max-width: 1024px) 0vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
