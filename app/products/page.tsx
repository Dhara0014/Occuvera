"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Filter, Search, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import BookingModal from "@/components/common/BookingModal";

const PRODUCTS = [
  {
    id: 1,
    name: "Avenue Square",
    brand: "Occuvera Elite",
    price: "₹8,499",
    category: "Classic",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=85&fit=crop",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Titanium Air",
    brand: "Occuvera Tech",
    price: "₹12,999",
    category: "Designer",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=85&fit=crop",
    rating: 4.9,
    reviews: 86
  },
  {
    id: 3,
    name: "Coastal Breeze",
    brand: "Occuvera Style",
    price: "₹6,499",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=85&fit=crop",
    rating: 4.7,
    reviews: 215
  },
  {
    id: 4,
    name: "Midnight Aviator",
    brand: "Occuvera Elite",
    price: "₹9,999",
    category: "Classic",
    image: "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?w=600&q=85&fit=crop",
    rating: 4.9,
    reviews: 42
  },
  {
    id: 5,
    name: "Urban Explorer",
    brand: "Occuvera Tech",
    price: "₹7,999",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=85&fit=crop",
    rating: 4.6,
    reviews: 310
  },
  {
    id: 6,
    name: "Royal Velvet",
    brand: "Occuvera Style",
    price: "₹15,499",
    category: "Designer",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&q=85&fit=crop",
    rating: 5.0,
    reviews: 18
  }
];

export default function ProductsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "all" || p.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="">
      {/* Premium Hero Header */}
      <section className="bg-[#0B1C2D] py-24 relative overflow-hidden -mt-[72px] md:-mt-[108px]">
        {/* Aesthetic Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D9488]/20 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D9488]/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/50 via-transparent to-[#0B1C2D]/10 pointer-events-none z-0" />
        
        <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-[72px] md:pt-[108px]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black text-white leading-tight mb-8 tracking-tight">
                Designer <br />
                <span className="text-[#0D9488] relative inline-block">
                  Collections.
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0D9488]/20 -z-10" />
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-inter max-w-2xl leading-relaxed font-light mb-0">
                Explore our curated selection of premium frames. From timeless classics to cutting-edge designer series.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:shrink-0">
              <div className="relative group w-full sm:w-[320px]">
                <div className="absolute inset-x-0 bottom-0 h-px bg-white/20 group-focus-within:bg-[#0D9488] transition-colors" />
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 size-5 text-white/40 group-focus-within:text-[#0D9488] transition-colors" />
                <Input 
                  placeholder="Search brands or styles..." 
                  className="bg-transparent border-none text-white placeholder:text-white/30 pl-8 h-12 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg font-inter"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={category} onValueChange={(val) => setCategory(val || "all")}>
                <SelectTrigger className="w-full sm:w-[180px] h-12 rounded-xl bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all font-bold tracking-widest text-[11px] uppercase">
                  <SelectValue placeholder="All Styles" />
                </SelectTrigger>
                <SelectContent className="rounded-xl bg-[#0B1C2D] border-white/10 text-white">
                  <SelectItem value="all">All Styles</SelectItem>
                  <SelectItem value="classic">Classic</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-50 m-4 rounded-[2rem]">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 border border-white/50">
                      <Star className="size-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-black text-[#0B1C2D]">{product.rating}</span>
                    </div>
                    <div className="absolute inset-0 bg-[#0B1C2D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 backdrop-blur-[2px]">
                      <Button 
                        onClick={() => setBookingOpen(true)}
                        className="w-full bg-white text-[#0B1C2D] hover:bg-[#0D9488] hover:text-white rounded-2xl py-8 font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all duration-300"
                      >
                        Try with styling expert
                      </Button>
                    </div>
                  </div>
                  <div className="p-10 pt-4 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#0D9488] mb-2 block font-black">
                          {product.brand}
                        </span>
                        <h3 className="text-2xl font-montserrat font-black text-[#0B1C2D]">{product.name}</h3>
                      </div>
                      <span className="text-xl font-montserrat font-black text-[#0B1C2D] tracking-tight">{product.price}</span>
                    </div>
                    <p className="text-[#5a6a7a] text-sm font-inter mb-8 line-clamp-2 leading-relaxed">
                      Handcrafted premium acetate frames featuring stainless steel temple cores for maximum durability and comfort.
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Available in Satellite</span>
                      </div>
                      <button 
                        onClick={() => setBookingOpen(true)}
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B1C2D] hover:text-[#0D9488] transition-colors flex items-center gap-3 group/btn"
                      >
                        Learn More <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
              <ShoppingBag className="size-20 text-gray-100 mx-auto mb-8" />
              <h3 className="text-3xl font-montserrat font-black text-[#0B1C2D]">No products found</h3>
              <p className="text-[#5a6a7a] font-inter text-lg mt-3 max-w-sm mx-auto">Try adjusting your filters or search query to find the perfect frame.</p>
              <Button 
                variant="outline" 
                className="mt-10 rounded-2xl px-10 h-14 border-gray-200 hover:bg-[#0B1C2D] hover:text-white transition-all font-bold uppercase tracking-widest text-xs"
                onClick={() => {
                  setSearchQuery("");
                  setCategory("all");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Unified Quality Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-[#0B1C2D] rounded-[3rem] p-12 md:p-24 relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D9488]/10 rounded-full -mr-32 -mt-32 blur-[120px] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-montserrat font-black text-white mb-8 leading-[1.1] tracking-tight">
                  Authenticity <br />
                  <span className="text-[#0D9488]">Guaranteed.</span>
                </h2>
                <p className="text-white/60 font-inter text-xl mb-12 leading-relaxed font-light">
                  We are authorized retailers for every brand we carry. Each pair comes with a certificate of authenticity and national warranty.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-10">
                  {["Official Warranty", "Expert Fitting", "30-Day Returns"].map(f => (
                    <div key={f} className="flex items-center gap-4 group/item">
                      <div className="size-6 rounded-full bg-[#0D9488]/20 flex items-center justify-center group-hover/item:bg-[#0D9488] transition-colors">
                        <ArrowRight className="size-3 text-white" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-2/5">
                <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl skew-y-3 group-hover:skew-y-0 transition-transform duration-700">
                   <Image 
                    src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=85&fit=crop" 
                    alt="Premium Quality" 
                    fill
                    className="object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified CTA Section */}
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
