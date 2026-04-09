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
    <section className="py-20 md:py-24 bg-white relative overflow-hidden" id="how-it-works">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute -bottom-24 -right-24 text-[20rem] font-montserrat font-black text-[#0B1C2D]/[0.02] select-none pointer-events-none uppercase">
        Process
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-[#0B1C2D] tracking-tighter mb-8 leading-tight">
                Our Professional <span className="text-[#0D9488]">Process.</span>
            </h2>
            <p className="text-[#5a6a7a] font-inter leading-relaxed text-xl max-w-2xl mx-auto font-light">
                Experience Ahmedabad's most rigorous clinical journey. We combine surgical precision with bespoke styling in every vision mapping session.
            </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
          {/* Advanced Connector (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#0D9488]/30 to-transparent" />

          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative group flex flex-col items-center text-center"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative size-48 md:size-60 mb-12">
                <div className="absolute inset-0 rounded-full border border-[#0D9488]/20 group-hover:border-[#0D9488]/50 transition-colors duration-700" />
                <div className="absolute inset-4 rounded-full border border-dashed border-[#0D9488]/40 group-hover:rotate-90 transition-transform duration-[3s] linear" />
                
                <div className="absolute inset-8 rounded-full overflow-hidden bg-[#F8FAFC] shadow-inner">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="240px"
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[#0B1C2D]/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Glass Step Badge */}
                <div
                  aria-label={`Step ${step.step}`}
                  className="absolute top-0 right-4 size-14 rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-2xl flex flex-col items-center justify-center z-20 group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-500"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">Step</span>
                  <span className="text-lg font-montserrat font-black leading-none">{step.step}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-montserrat font-black text-[#0B1C2D] group-hover:text-[#0D9488] transition-colors tracking-tight">
                    {step.title}
                </h3>
                <p className="text-base text-[#5a6a7a] font-inter leading-relaxed px-2 font-light">
                    {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
