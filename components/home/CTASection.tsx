"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import BookingModal from "@/components/common/BookingModal";
import { useState } from "react";

const BADGES = [
  { label: "Consultation", value: "Instant" },
  { label: "Warranty", value: "1 Year" },
  { label: "Follow-up", value: "Complimentary" },
] as const;

export default function CTASection() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-24 relative overflow-hidden">
        {/* Aesthetic Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#0D9488]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        
        <div className="container max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-montserrat font-black text-[#0B1C2D] mb-8 tracking-tighter leading-[0.9]">
                    Start your own <br />
                    <span className="text-[#0D9488]">vision story.</span>
                </h2>
                <p className="text-[#5a6a7a] font-inter text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                    Join thousands of happy patients in Ahmedabad and experience the <span className="text-[#0D9488] font-bold underline decoration-[#0D9488]/30 underline-offset-8">Occuvera difference</span> today.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button 
                        onClick={() => setBookingOpen(true)}
                        className="bg-[#0D9488] hover:bg-[#0B1C2D] text-white px-12 h-20 rounded-2xl font-black uppercase tracking-[0.25em] text-[11px] transition-all duration-500 shadow-2xl shadow-[#0D9488]/30 hover:-translate-y-2 w-full sm:w-auto"
                    >
                        Book Your Appointment
                    </Button>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-12 h-20 rounded-2xl border-2 border-[#0B1C2D]/10 text-[#0B1C2D] font-black uppercase tracking-[0.25em] text-[11px] hover:bg-[#0B1C2D] hover:text-white transition-all duration-500 w-full sm:w-auto"
                    >
                        Visit our Store
                    </Link>
                </div>

                <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-40">
                    {[
                        { label: "Clinical precision", icon: ArrowRight },
                        { label: "Designer curation", icon: ArrowRight },
                        { label: "Lifelong care", icon: ArrowRight }
                    ].map(item => (
                        <div key={item.label} className="flex items-center gap-3">
                            <item.icon className="size-4 text-[#0D9488]" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
}
