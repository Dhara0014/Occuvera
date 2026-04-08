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
    <section className="py-24 bg-white" id="collection">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header — reference style centered */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-[var(--font-montserrat)] font-black text-[#0B1C2D] tracking-tight mb-4">
            Eyewear <span className="text-[#0D9488]">Collections</span>
          </h2>
          <p className="text-[#5a6a7a] font-[var(--font-inter)] text-lg leading-relaxed">
            Discover our curated selection of premium frames and designer eyewear.
          </p>
        </div>

        {/* Collections Grid — matches reference card style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((collection, i) => (
            <div
              key={collection.title}
              className="group bg-white rounded-2xl border border-[#0B1C2D]/5 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Dual-pane image layout — like the reference screenshots */}
              <div className="relative h-56 flex overflow-hidden bg-[#F8FAFC]">
                {/* Price badge — reference style top-right teal */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-[#0D9488] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded shadow-lg">
                  <span>{collection.price}</span>
                  <span className="line-through opacity-60 text-[10px]">{collection.originalPrice}</span>
                </div>

                {/* Two images side by side */}
                {collection.images.map((img, j) => (
                  <div key={j} className="relative flex-1 overflow-hidden">
                    <Image
                      src={img}
                      alt={`${collection.title} - view ${j + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              {/* Card info */}
              <div className="p-6">
                <h3 className="text-xl font-[var(--font-montserrat)] font-bold text-[#0B1C2D] mb-2">
                  {collection.title}
                </h3>
                <p className="text-[#5a6a7a] font-[var(--font-inter)] text-sm mb-5">
                  {collection.subtitle}
                </p>
                <Link
                  href={collection.href}
                  className="inline-flex items-center gap-1.5 text-[#0D9488] font-[var(--font-montserrat)] font-bold text-sm hover:text-[#0B1C2D] transition-colors group/link"
                >
                  View Collection
                  <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Brand strip */}
        <div className="mt-20 pt-16 border-t border-[#0B1C2D]/5 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
          {["Ray-Ban", "Prada", "Tom Ford", "Oakley", "Persol", "Gucci", "Versace"].map((brand) => (
            <span
              key={brand}
              className="text-[#0B1C2D]/25 font-[var(--font-montserrat)] font-black text-xl tracking-tighter hover:text-[#0D9488] transition-colors duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
