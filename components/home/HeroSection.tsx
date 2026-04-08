"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Slide {
  image: string;
  titlePrimary: string;
  titleSecondary: string;
  titleAccent: string;
  desc: string;
}

const SLIDES: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1600&q=90&fit=crop",
    titlePrimary: "Premium",
    titleSecondary: "Eyewear",
    titleAccent: "Collection",
    desc: "Discover the latest styles from luxury brands and independent designers. Precision care meets modern aesthetics.",
  },
  {
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1600&q=90&fit=crop",
    titlePrimary: "Clinical",
    titleSecondary: "Vision",
    titleAccent: "Care",
    desc: "Experience state-of-the-art diagnostic screening and precision mapping by board-certified specialists.",
  },
  {
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=1600&q=90&fit=crop",
    titlePrimary: "Summer",
    titleSecondary: "Retail",
    titleAccent: "Exclusive",
    desc: "Upgrade your seasonal look with our curated selection of high-performance designer sunglasses.",
  },
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    // -mt offsets the layout.tsx padding so the hero image goes edge-to-edge behind header
    <section className="relative -mt-[76px] md:-mt-[90px] min-h-screen bg-gray-900 overflow-hidden">
      {/* Embla Viewport */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.titleAccent}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              {/* Background image + overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={`${slide.titlePrimary} ${slide.titleAccent}`}
                  fill
                  sizes="100vw"
                  className="object-cover object-center opacity-40"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D] via-[#0B1C2D]/50 to-transparent" />
              </div>

              {/* Slide content — padded to clear fixed header (layout adds 76/114px), hero negates it */}
              <div className="relative z-10 h-full flex flex-col justify-center pt-[96px] md:pt-[140px] pb-[180px] md:pb-[200px]">
                <div className="container px-6 md:px-12 max-w-7xl mx-auto">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[var(--font-montserrat)] font-black leading-[1.05] text-white tracking-tighter mb-6 md:mb-10">
                    {slide.titlePrimary}
                    <br />
                    {slide.titleSecondary}
                    <br />
                    <span className="text-[#0D9488]">{slide.titleAccent}</span>
                  </h1>

                  <p className="text-white/80 text-base sm:text-lg md:text-xl font-[var(--font-inter)] leading-relaxed max-w-xl mb-8 md:mb-12">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {/* Primary CTA — plain button, no shadcn ring */}
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 h-12 md:h-14 px-7 md:px-10 text-xs font-bold uppercase tracking-widest rounded-md bg-[#0D9488] text-white hover:bg-white hover:text-[#0B1C2D] transition-all duration-300 shadow-xl"
                    >
                      Shop Now
                      <ArrowRight className="size-4" />
                    </button>
                    {/* Secondary CTA */}
                    <Link
                      href="#collection"
                      className="inline-flex items-center justify-center h-12 md:h-14 px-7 md:px-10 text-xs font-bold uppercase tracking-widest rounded-md border-2 border-white text-white hover:bg-white hover:text-[#0B1C2D] transition-all duration-300"
                    >
                      View Collections
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar — pinned to bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-[#0B1C2D] pb-8 pt-16 pointer-events-none">
        <div className="container max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
            {[
              { value: "Designer", label: "Luxury Brands" },
              { value: "₹6,499+", label: "Starting Price" },
              { value: "1-Year", label: "Global Warranty" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-[#0D9488] text-xl sm:text-2xl md:text-3xl font-[var(--font-montserrat)] font-black mb-0.5">
                  {value}
                </p>
                <p className="text-white/60 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prev arrow — LEFT side */}
      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#0B1C2D] transition-all duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-5 md:size-6" />
      </button>

      {/* Next arrow — RIGHT side */}
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#0B1C2D] transition-all duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="size-5 md:size-6" />
      </button>
    </section>
  );
}
