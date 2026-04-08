"use client";

import { type LucideIcon, Eye, Glasses, Sparkles, Stethoscope } from "lucide-react";
import Link from "next/link";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exams",
    description: "State-of-the-art technology for thorough eye health assessments and vision testing by our board-certified optometrists.",
  },
  {
    icon: Glasses,
    title: "Designer Frames",
    description: "Curated collection of premium eyewear from top international and local brands — over 200 labels in stock.",
  },
  {
    icon: Sparkles,
    title: "Contact Lenses",
    description: "Wide range of contact lenses including daily, monthly, and specialty lenses with complimentary fitting.",
  },
  {
    icon: Stethoscope,
    title: "Lens Technology",
    description: "Advanced lens options including blue-light protection, transitions, progressive and high-index lenses.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]" id="services">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Centered Header — matches reference */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-black text-[#0B1C2D] tracking-tight mb-4">
            Our <span className="text-[#0D9488]">Services</span>
          </h2>
          <p className="text-[#5a6a7a] font-[var(--font-inter)] text-lg leading-relaxed">
            Comprehensive eye care solutions tailored to your unique vision needs.
          </p>
        </div>

        {/* Service Cards — reference style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 border border-[#0B1C2D]/5 shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Teal icon circle — matches reference exactly */}
                <div
                  aria-hidden="true"
                  className="w-16 h-16 rounded-full bg-[#0D9488]/10 flex items-center justify-center text-[#0D9488] mx-auto mb-6 group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-400"
                >
                  <Icon className="size-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-[var(--font-montserrat)] font-bold text-[#0B1C2D] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#5a6a7a] font-[var(--font-inter)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA — matches reference */}
        <div className="text-center mt-14 pt-10 border-t border-[#0B1C2D]/5">
          <p className="text-[#5a6a7a] font-[var(--font-inter)] mb-3">
            Not sure what you need?{" "}
            <span className="text-[#0D9488] font-semibold">Our experts are here to help.</span>
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#0D9488] font-[var(--font-montserrat)] font-bold underline underline-offset-4 hover:text-[#0B1C2D] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
