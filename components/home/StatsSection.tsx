"use client";

import { CheckCircle2 } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { label: "Patient Satisfaction", value: "98%" },
    { label: "Clinical Excellence", value: "15+ Years" },
    { label: "Luxury Collection", value: "200+ Brands" },
    { label: "Lense Accuracy", value: "99.9%" },
  ];

  return (
    <section className="bg-[#0B1C2D] py-16 md:py-20 relative overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-[#0D9488]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-x-20 items-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group"
            >
              <div className="size-16 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#0D9488] shrink-0 group-hover:bg-[#0D9488] group-hover:text-white group-hover:border-[#0D9488] group-hover:rotate-12 transition-all duration-700 shadow-2xl">
                <CheckCircle2 className="size-8" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-montserrat font-black text-white leading-none mb-3 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#0D9488] font-black">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
