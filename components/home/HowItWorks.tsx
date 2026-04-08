"use client";

import Image from "next/image";

interface Step {
  step: string;
  title: string;
  description: string;
  image: string;
}

const STEPS: Step[] = [
  {
    step: "01",
    title: "Optical Intake",
    description: "Digital profile creation and advanced baseline screenings using automated diagnostics.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&q=85&fit=crop",
  },
  {
    step: "02",
    title: "Precision Imaging",
    description: "Detailed retinal imaging and topographic analysis performed by clinical experts.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=500&q=85&fit=crop",
  },
  {
    step: "03",
    title: "Boutique Selection",
    description: "Curated styling consultation with our vault of over 200 designer frame collections.",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=85&fit=crop",
  },
  {
    step: "04",
    title: "Final Verification",
    description: "Rigorous quality control and precise fitting to ensure absolute visual fidelity.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=85&fit=crop",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Header - Reference Style */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-black text-[#0B1C2D] tracking-tighter mb-6">
            Our Professional <span className="text-[#0D9488]">Process</span>
          </h2>
          <p className="text-[#5a6a7a] font-[var(--font-inter)] leading-relaxed text-lg">
            Experience the standard of surgical precision in every vision mapping session.
          </p>
        </div>

        {/* Steps Grid - Reference Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-32 right-32 h-px bg-[#0B1C2D]/10" />

          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative group flex flex-col items-center text-center"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative w-28 h-28 mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-[#0D9488] border-dashed group-hover:rotate-45 transition-transform duration-1000" />
                <div className="absolute inset-2 rounded-full overflow-hidden bg-[#F8FAFC]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="112px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div
                  aria-label={`Step ${step.step}`}
                  className="absolute -top-1 -right-1 w-10 h-10 rounded-full bg-[#0D9488] text-white font-[var(--font-montserrat)] font-black flex items-center justify-center text-xs shadow-xl z-20"
                >
                  {step.step}
                </div>
              </div>

              <h3 className="text-xl font-[var(--font-montserrat)] font-bold text-[#0B1C2D] mb-4 group-hover:text-[#0D9488] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-[#5a6a7a] font-[var(--font-inter)] leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
