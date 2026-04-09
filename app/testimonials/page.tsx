"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2, MessageSquare } from "lucide-react";
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/common/BookingModal";

const REVIEWS = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    rating: 5,
    date: "2 weeks ago",
    review: "I've been wearing glasses for 15 years and this was by far the most thorough eye exam I've ever had. My new prescription is spot-on. The frame selection is simply stunning and unlike anything else in Ahmedabad.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Rahul Mehta",
    role: "Architect",
    rating: 5,
    date: "1 month ago",
    review: "Came in for blue light glasses and left with a complete style transformation. The team helped me find frames I never would have picked myself. The quality of the lenses is exceptional.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Ananya Patel",
    role: "Doctor",
    rating: 5,
    date: "3 months ago",
    review: "As a medical professional, I trust the diagnostic quality here. The retinal scan and digital refraction gave a more accurate result than my previous clinic. Highly professional staff.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=85&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Vikram Shah",
    role: "Business Owner",
    rating: 5,
    date: "5 months ago",
    review: "The luxury collection is unbeatable. Picked up a pair of Tom Ford frames and the fitting was perfect. The after-sales service for adjustments is also very convenient.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Sneha Gupta",
    role: "Fashion Blogger",
    rating: 5,
    date: "6 months ago",
    review: "Finally an optical store that understands fashion! They have the trendiest frames. I get complements every day on my new glasses. Thank you Occuvera!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85&fit=crop&crop=face",
    verified: true,
  },
  {
    name: "Amit Trivedi",
    role: "Graphic Designer",
    rating: 4,
    date: "8 months ago",
    review: "Technically very sound. The wait time was a bit longer than expected but the results were worth it. The precision of their measurements is quite impressive.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=85&fit=crop&crop=face",
    verified: true,
  }
];

export default function TestimonialsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="">
      {/* Hero Header */}
      <section className="bg-[#0B1C2D] py-24 relative overflow-hidden -mt-[72px] md:-mt-[108px]">
        {/* Aesthetic Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D9488]/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D9488]/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/50 via-transparent to-[#0B1C2D]/10 pointer-events-none z-0" />
        
        <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center pt-[72px] md:pt-[108px]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black text-white mb-6 tracking-tight leading-tight">
            Words from our <br />
            <span className="text-[#0D9488] relative inline-block">
              Patients.
              <span className="absolute bottom-4 left-0 w-full h-4 bg-[#0D9488]/20 -z-10" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-inter max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Real stories of vision transformation from the Occuvera community. Discover why we are Ahmedabad's choice for premium eye care.
          </p>
          
          {/* Summary Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 border-t border-white/5 max-w-4xl mx-auto">
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-montserrat font-black text-white mb-1 group-hover:text-[#0D9488] transition-colors">4.9/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="size-4 fill-[#F59E0B] text-[#F59E0B]" />)}
              </div>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">Average Rating</p>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-montserrat font-black text-white mb-1 group-hover:text-[#0D9488] transition-colors">2,000+</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#0D9488] mb-2 font-black">Verified Reviews</div>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">On Google & Socials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div 
                key={review.name} 
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, j) => (
                      <Star 
                        key={j} 
                        className={`size-4 ${j < review.rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-inter">
                    {review.date}
                  </span>
                </div>

                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 size-10 text-[#0D9488]/10 group-hover:text-[#0D9488]/20 transition-colors" />
                  <p className="text-[#0B1C2D]/80 font-inter leading-relaxed italic relative z-10">
                    "{review.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-8 border-t border-gray-50 mt-auto">
                  <div className="relative size-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image 
                      src={review.avatar} 
                      alt={review.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-lg font-montserrat font-bold text-[#0B1C2D]">{review.name}</h4>
                      {review.verified && (
                        <CheckCircle2 className="size-4 text-[#0D9488]" />
                      )}
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#0D9488]">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-[#0B1C2D] hover:bg-[#0D9488] text-white px-10 py-7 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-xl">
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-[#0D9488] rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden group shadow-2xl shadow-[#0D9488]/20">
            {/* Animated Background Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 group-hover:bg-white/30 transition-all duration-700" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B1C2D]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10 backdrop-blur-sm border border-white/20 group-hover:rotate-12 transition-transform duration-500">
                <MessageSquare className="size-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white mb-8 tracking-tight leading-tight">
                Had a great experience? <br />
                <span className="opacity-70">Tell the world.</span>
              </h2>
              <p className="text-white/80 font-inter text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                Your feedback helps us maintain the highest standards of care and helps others discover the gift of perfect vision.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button className="bg-[#0B1C2D] hover:bg-white hover:text-[#0B1C2D] text-white px-10 h-16 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-500 shadow-xl group/btn">
                  Write a Google Review
                  <FaGoogle className="ml-3 size-4 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </Button>
                <Button 
                  className="bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-[#0D9488] px-10 h-16 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-500"
                >
                  Share on Instagram
                  <FaInstagram className="ml-3 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F8FAFC] py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-montserrat font-black text-[#0B1C2D] mb-6 tracking-tight">Start your own vision story.</h2>
                <p className="text-[#5a6a7a] font-inter text-xl mb-12 max-w-2xl mx-auto leading-relaxed">Join thousands of happy patients in Ahmedabad and experience the <span className="text-[#0D9488] font-bold underline decoration-[#0D9488]/30 underline-offset-4">Occuvera difference</span> today.</p>
                <Button 
                    onClick={() => setBookingOpen(true)}
                    className="bg-[#0D9488] hover:bg-[#0B1C2D] text-white px-12 h-18 py-8 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 shadow-2xl shadow-[#0D9488]/30 hover:-translate-y-1"
                >
                    Book Your Appointment Now
                </Button>
            </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
}
