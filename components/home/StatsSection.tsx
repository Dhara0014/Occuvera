"use client";

import { CheckCircle2 } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { label: "Customer Satisfaction", value: "98%" },
    { label: "Years Experience", value: "15+" },
    { label: "Designer Collection", value: "200+" },
    { label: "Accuracy Rate", value: "99.9%" },
  ];

  return (
    <section className="bg-[#0B1C2D] py-16">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 group"
              style={{ animation: `fade-up 0.8s ease-out ${i * 0.1}s both` }}
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#0D9488] shrink-0 group-hover:bg-[#0D9488] group-hover:text-white group-hover:border-[#0D9488] transition-all duration-500">
                <CheckCircle2 className="size-6" />
              </div>
              <div>
                <div className="text-3xl font-[var(--font-montserrat)] font-black text-white leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-white/50">
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
