import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Collection {
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  images: string[];
  href: string;
}

const COLLECTIONS: Collection[] = [
  {
    title: "Classic Collection",
    subtitle: "Timeless frames for everyday elegance",
    price: "₹6,499",
    originalPrice: "₹9,999",
    href: "#",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=85&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&q=85&fit=crop",
    ],
  },
  {
    title: "Designer Series",
    subtitle: "Premium luxury eyewear brands",
    price: "₹14,999",
    originalPrice: "₹22,000",
    href: "#",
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&q=85&fit=crop",
      "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?w=400&q=85&fit=crop",
    ],
  },
  {
    title: "Sports & Active",
    subtitle: "Performance eyewear for active lifestyles",
    price: "₹8,999",
    originalPrice: "₹13,500",
    href: "#",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=85&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&q=85&fit=crop",
    ],
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-20 md:py-24 bg-[#F8FAFC] relative overflow-hidden" id="collection">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#0D9488]/5 rounded-full blur-[120px] -ml-96 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0D9488]/5 rounded-full blur-[100px] -mr-64 -mb-64 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-montserrat font-black text-[#0B1C2D] tracking-tighter mb-6 leading-tight">
                    Premium <span className="text-[#0D9488]">Collections.</span>
                </h2>
                <p className="text-[#5a6a7a] font-inter text-xl leading-relaxed font-light">
                    Curating the world's most prestigious labels with clinical precision. From timeless classics to cutting-edge designer signatures.
                </p>
            </div>
            <Link
                href="/products"
                className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.25em] text-[#0B1C2D] hover:text-[#0D9488] transition-colors"
            >
                View Full Catalog 
                <div className="size-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="size-4" />
                </div>
            </Link>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {COLLECTIONS.map((collection, i) => (
            <div
              key={collection.title}
              className="group flex flex-col"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white shadow-sm group-hover:shadow-3xl group-hover:-translate-y-4 transition-all duration-700">
                 {/* Images with overlay */}
                 <div className="absolute inset-0 flex">
                    {collection.images.map((img, j) => (
                    <div key={j} className="relative flex-1 h-full overflow-hidden border-r last:border-r-0 border-white/10">
                        <Image
                        src={img}
                        alt={`${collection.title} - view ${j + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                    </div>
                    ))}
                 </div>
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-[#0B1C2D]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                 
                 <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-xl">
                    <span className="text-[11px] font-black text-[#0B1C2D] uppercase tracking-wider">{collection.price}</span>
                    <span className="text-[10px] text-[#5a6a7a] line-through opacity-40">{collection.originalPrice}</span>
                 </div>

                 <div className="absolute inset-x-0 bottom-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="h-px w-12 bg-[#0D9488] mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                    <h3 className="text-3xl font-montserrat font-black text-white mb-3">
                        {collection.title}
                    </h3>
                    <p className="text-white/60 font-inter text-sm mb-0">
                        {collection.subtitle}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand strip */}
        <div className="mt-32 pt-20 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-10 md:gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 overflow-hidden">
            {["Ray-Ban", "Prada", "Tom Ford", "Oakley", "Persol", "Gucci", "Versace"].map((brand) => (
              <span
                key={brand}
                className="text-[#0B1C2D] font-montserrat font-black text-2xl md:text-3xl tracking-tighter hover:text-[#0D9488] transition-colors duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
